"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  X,
  HelpCircle,
  User,
  Heart,
  QrCode,
  Mail,
  CheckCircle2,
} from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import BankIDLogo from "@/components/BankIDLogo";
import { useApp } from "@/context/AppContext";

export default function SwishaPage() {
  const router = useRouter();
  const { addTransaction } = useApp();
  const [tab, setTab] = useState<"swisha" | "beom">("swisha");
  const [recipient, setRecipient] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState<null | {
    recipient: string;
    name?: string;
    amount: string;
    message?: string;
  }>(null);

  const onSubmit = () => {
    if (!recipient || !amount) return;
    const tx = {
      recipient,
      name: recipientName || undefined,
      amount,
      message: message || undefined,
    };
    addTransaction({
      recipient,
      recipientName: recipientName || undefined,
      amount: Number(amount) || 0,
      message: message || undefined,
    });
    setSent(tx);
  };

  return (
    <div className="px-5 pt-2 flex flex-col h-[calc(100vh-44px)]">
      {/* Top bar */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <button
          aria-label="Stäng"
          onClick={() => router.push("/")}
          className="text-white"
        >
          <X size={26} />
        </button>
        <button aria-label="Hjälp" className="text-white">
          <HelpCircle size={24} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-6 border-b border-white/10">
        <TabButton active={tab === "swisha"} onClick={() => setTab("swisha")}>
          Swisha
        </TabButton>
        <TabButton active={tab === "beom"} onClick={() => setTab("beom")}>
          Be om
        </TabButton>
      </div>

      <div className="flex-1 space-y-3 overflow-auto scrollbar-hidden">
        {/* Recipient card */}
        <div className="bg-card rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/5">
            <label className="text-textSecondary text-xs">Mottagare</label>
            <input
              type="tel"
              inputMode="tel"
              placeholder="Telefonnummer"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="bg-transparent w-full text-white outline-none text-base mt-1"
            />
          </div>
          <div className="px-4 py-3 border-b border-white/5">
            <label className="text-textSecondary text-xs">Namn</label>
            <input
              type="text"
              placeholder="Mottagarens namn"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className="bg-transparent w-full text-white outline-none text-base mt-1"
            />
          </div>
          <div className="grid grid-cols-3 divide-x divide-white/5">
            <RecipientPickerButton icon={<User size={18} />} label="Kontakter" />
            <RecipientPickerButton icon={<Heart size={18} />} label="Favoriter" />
            <RecipientPickerButton icon={<QrCode size={18} />} label="Skanna QR" />
          </div>
        </div>

        {/* Amount */}
        <div className="bg-card rounded-2xl px-4 py-3">
          <label className="text-textSecondary text-xs">Belopp</label>
          <div className="flex items-center mt-1">
            <input
              type="number"
              inputMode="numeric"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent flex-1 text-white outline-none text-2xl font-semibold"
            />
            <span className="text-textSecondary text-lg ml-2">kr</span>
          </div>
        </div>

        {/* Message */}
        <div className="bg-card rounded-2xl px-4 py-3">
          <label className="text-textSecondary text-xs">Meddelande</label>
          <input
            type="text"
            placeholder="Skriv ett meddelande"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent w-full text-white outline-none text-base mt-1"
          />
        </div>

        {/* Send with card */}
        <button className="bg-secondaryBg rounded-full py-2.5 px-4 text-sm text-white inline-flex items-center gap-2">
          <Mail size={16} />
          <span>Skicka med ett kort</span>
        </button>
      </div>

      {/* Bottom CTA */}
      <div className="mb-4 mt-3">
        <PrimaryButton onClick={onSubmit} trailing={<BankIDLogo />}>
          {tab === "swisha" ? "Swisha" : "Be om"}
        </PrimaryButton>
      </div>

      {sent && (
        <SuccessModal
          recipient={sent.recipient}
          name={sent.name}
          amount={sent.amount}
          message={sent.message}
          onClose={() => router.push("/")}
        />
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 text-base font-semibold relative ${
        active ? "text-white" : "text-textSecondary"
      }`}
    >
      {children}
      {active && (
        <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-primary rounded" />
      )}
    </button>
  );
}

function RecipientPickerButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex flex-col items-center gap-1 py-3 active:bg-white/5">
      <span className="text-primary">{icon}</span>
      <span className="text-xs text-textSecondary">{label}</span>
    </button>
  );
}

function SuccessModal({
  recipient,
  name,
  amount,
  message,
  onClose,
}: {
  recipient: string;
  name?: string;
  amount: string;
  message?: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
      <div className="bg-card w-full max-w-sm rounded-2xl p-6 text-center">
        <div className="flex justify-center mb-3">
          <CheckCircle2 size={56} className="text-accentGreen" />
        </div>
        <h2 className="text-2xl font-bold mb-1">Skickat!</h2>
        <p className="text-textSecondary text-sm mb-5">
          {amount || "0"} kr har skickats
        </p>

        <div className="bg-bg/60 rounded-xl p-4 text-left text-sm space-y-2 mb-5">
          <Row label="Mottagare" value={recipient || "—"} />
          {name && <Row label="Namn" value={name} />}
          <Row label="Belopp" value={`${amount || "0"} kr`} />
          {message && <Row label="Meddelande" value={message} />}
        </div>

        <button
          onClick={onClose}
          className="swish-gradient w-full rounded-full py-3 text-white font-semibold"
        >
          Klar
        </button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-textSecondary">{label}</span>
      <span className="text-white text-right break-all">{value}</span>
    </div>
  );
}
