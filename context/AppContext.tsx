"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { generateSwedishMobile } from "@/lib/phone";

export type Transaction = {
  id: string;
  recipient: string;
  recipientName?: string;
  amount: number;
  message?: string;
  date: string; // ISO
};

type AppContextValue = {
  phone: string;
  customQR: string | null;
  setCustomQR: (data: string | null) => void;
  transactions: Transaction[];
  addTransaction: (t: Omit<Transaction, "id" | "date">) => void;
  hydrated: boolean;
};

const AppContext = createContext<AppContextValue | null>(null);

const PHONE_KEY = "swishclone.phone";
const QR_KEY = "swishclone.customQR";
const TX_KEY = "swishclone.transactions";

export function AppProvider({ children }: { children: ReactNode }) {
  const [phone, setPhone] = useState<string>("");
  const [customQR, setCustomQRState] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let storedPhone = localStorage.getItem(PHONE_KEY);
    if (!storedPhone) {
      storedPhone = generateSwedishMobile();
      localStorage.setItem(PHONE_KEY, storedPhone);
    }
    setPhone(storedPhone);

    const storedQR = localStorage.getItem(QR_KEY);
    if (storedQR) setCustomQRState(storedQR);

    const storedTx = localStorage.getItem(TX_KEY);
    if (storedTx) {
      try {
        setTransactions(JSON.parse(storedTx));
      } catch {
        // ignore corrupt data
      }
    }

    setHydrated(true);
  }, []);

  const setCustomQR = (data: string | null) => {
    setCustomQRState(data);
    if (data) localStorage.setItem(QR_KEY, data);
    else localStorage.removeItem(QR_KEY);
  };

  const addTransaction = (t: Omit<Transaction, "id" | "date">) => {
    const newTx: Transaction = {
      ...t,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    const next = [newTx, ...transactions];
    setTransactions(next);
    localStorage.setItem(TX_KEY, JSON.stringify(next));
  };

  return (
    <AppContext.Provider
      value={{
        phone,
        customQR,
        setCustomQR,
        transactions,
        addTransaction,
        hydrated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
