'use client'
import { useState } from "react";
import { Copy, Check } from "lucide-react";

type GivingType = "Offering" | "Tithe" | "Partnership" | "Project";
type CurrencyType = "Naira" | "Dollar" | "Pounds" | "Euro";

interface BankDetails {
  bankName: string;
  bankIcon: string;
  accountNumber: string;
  beneficiaryName: string;
}

const currencyAccounts: Record<CurrencyType, BankDetails> = {
  Naira: {
    bankName: "GTBank Nigeria",
    bankIcon: "🏦",
    accountNumber: "0909743403",
    beneficiaryName: "The Light Nation Church",
  },
  Dollar: {
    bankName: "International Bank",
    bankIcon: "🏦",
    accountNumber: "1234567890",
    beneficiaryName: "The Light Nation Church",
  },
  Pounds: {
    bankName: "UK Bank",
    bankIcon: "🏦",
    accountNumber: "0987654321",
    beneficiaryName: "The Light Nation Church",
  },
  Euro: {
    bankName: "European Bank",
    bankIcon: "🏦",
    accountNumber: "1122334455",
    beneficiaryName: "The Light Nation Church",
  },
};

const currencyDescriptions: Record<CurrencyType, string> = {
  Naira:
    "For users who wish to donate or transact in Naira (₦) through a Nigerian bank account.",
  Dollar:
    "For users who wish to donate or transact in US Dollars ($) through a domiciliary or international account.",
  Pounds:
    "For users who wish to donate or transact in British Pounds (£), especially those in the UK.",
  Euro:
    "For users who wish to donate or transact in Euros (€), especially those within the Eurozone.",
};

export default function OfferingDetails() {
  const [selectedGivingType, setSelectedGivingType] =
    useState<GivingType>("Offering");
  const [selectedCurrency, setSelectedCurrency] =
    useState<CurrencyType>("Naira");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const currentAccount = currencyAccounts[selectedCurrency];

  return (
    <div className="min-h-screen text-white px-4 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Step 1: Giving Type */}
        <div>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="bg-red-600 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-xs sm:text-sm">
              1
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              What would you like to Give?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {(
              ["Offering", "Tithe", "Partnership", "Project"] as GivingType[]
            ).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedGivingType(type)}
                className={`py-3 sm:py-4 px-3 sm:px-6 rounded-lg border-2 text-sm sm:text-base font-medium transition-all ${
                  selectedGivingType === type
                    ? "border-red-700 bg-red-600 bg-opacity-10"
                    : "border-gray-600 hover:border-gray-400"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Currency */}
        <div>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="bg-red-600 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-xs sm:text-sm">
              2
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Kindly Select Currency
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {(["Naira", "Dollar", "Pounds", "Euro"] as CurrencyType[]).map(
              (currency) => (
                <button
                  key={currency}
                  onClick={() => setSelectedCurrency(currency)}
                  className={`p-4 sm:p-6 rounded-lg border-2 text-left transition-all ${
                    selectedCurrency === currency
                      ? "border-red-600 bg-red-600 bg-opacity-10"
                      : "border-gray-500 hover:border-gray-400 bg-[#15161b]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      checked={selectedCurrency === currency}
                      onChange={() => setSelectedCurrency(currency)}
                      className="mt-1 accent-red-600"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-base sm:text-lg mb-1">
                        {currency} Account
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {currencyDescriptions[currency]}
                      </p>
                    </div>
                  </div>
                </button>
              )
            )}
          </div>
        </div>

        {/* Bank Details */}
        <div className="bg-[#15161b] rounded-lg p-5 sm:p-8 border border-gray-500">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="bg-orange-600 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl">
              {currentAccount.bankIcon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold">
              {currentAccount.bankName}
            </h3>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {/* Account Number */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
              <span className="text-gray-400 text-xs sm:text-sm">
                Account Number
              </span>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
                <span className="text-xl sm:text-2xl font-semibold tracking-wide break-all">
                  {currentAccount.accountNumber}
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(currentAccount.accountNumber, "accountNumber")
                  }
                  className="p-1 sm:p-2 hover:bg-gray-800 rounded-md transition-colors"
                  title="Copy account number"
                >
                  {copiedField === "accountNumber" ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Beneficiary */}
            <div className="border-t border-gray-600 pt-4 sm:pt-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                <span className="text-gray-400 text-xs sm:text-sm">
                  Beneficiary Name
                </span>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
                  <span className="text-base sm:text-lg font-medium text-right break-words">
                    {currentAccount.beneficiaryName}
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        currentAccount.beneficiaryName,
                        "beneficiaryName"
                      )
                    }
                    className="p-1 sm:p-2 hover:bg-gray-800 rounded-md transition-colors"
                    title="Copy beneficiary name"
                  >
                    {copiedField === "beneficiaryName" ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg md:text-xl font-medium mb-4 sm:mb-6">
            You can also try other Payment Methods
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 min-w-[180px] justify-center text-sm sm:text-base">
              Pay with <span className="font-bold">PayPal</span>
            </button>
            <button className="bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2 min-w-[180px] justify-center text-sm sm:text-base">
              Pay with <span className="font-bold">Flutterwave</span>
            </button>
            <button className="bg-cyan-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center gap-2 min-w-[180px] justify-center text-sm sm:text-base">
              Pay with <span className="font-bold">Paystack</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
