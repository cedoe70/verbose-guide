"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <style jsx>{`
        /* Animated Crypto Background */
        .crypto-bg::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.15), transparent 60%),
                      radial-gradient(circle at 80% 40%, rgba(0, 255, 255, 0.15), transparent 60%),
                      radial-gradient(circle at 50% 80%, rgba(255, 0, 255, 0.15), transparent 60%);
          animation: move-bg 20s linear infinite;
          z-index: 0;
        }

        @keyframes move-bg {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10%, -10%) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        /* Scrolling Crypto Ticker */
        .ticker-wrapper {
          overflow: hidden;
          white-space: nowrap;
          box-sizing: border-box;
        }
        .ticker {
          display: inline-block;
          padding-left: 100%;
          animation: ticker-scroll 25s linear infinite;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* Hero Section with Animated Crypto Background */}
      <section className="crypto-bg text-center py-20 px-6 relative overflow-hidden">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Invest in the Future of <span className="text-yellow-400">Crypto</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
          Secure, transparent, and high–yield cryptocurrency investment plans built for the future.
        </p>
        <div className="flex justify-center gap-4 relative z-10">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">View Plans</button>
        </div>

        {/* Price Ticker */}
        <div className="absolute bottom-0 left-0 w-full bg-black/40 py-2 text-yellow-400 text-sm font-semibold z-10">
          <div className="ticker-wrapper">
            <div className="ticker">
              BTC: $65,432 ▲2.4% • ETH: $3,120 ▲1.8% • BNB: $412 ▼0.5% • SOL: $152 ▲3.1% • XRP: $0.64 ▲0.9% • DOGE: $0.092 ▲5.4% • BTC: $65,432 ▲2.4% • ETH: $3,120 ▲1.8% • BNB: $412 ▼0.5% • SOL: $152 ▲3.1% • XRP: $0.64 ▲0.9% • DOGE: $0.092 ▲5.4%
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20 py-12 bg-gray-800">
        {[
          { label: "Total Investors", value: "12,540+" },
          { label: "Assets Managed", value: "$25M+" },
          { label: "Avg Annual Returns", value: "18%" },
          { label: "Years in Service", value: "5+" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400">{stat.value}</h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Investment Plans */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Investment Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: "Starter Plan", roi: "10%", duration: "30 Days", min: "$100", max: "$999" },
            { name: "Pro Plan", roi: "15%", duration: "60 Days", min: "$1,000", max: "$9,999" },
            { name: "Elite Plan", roi: "20%", duration: "90 Days", min: "$10,000", max: "Unlimited" }
          ].map((plan, i) => (
            <Card key={i} shadow="lg" className="bg-gray-900 border border-gray-700">
              <CardHeader className="text-xl font-bold text-yellow-400">{plan.name}</CardHeader>
              <CardBody className="space-y-2">
                <p>ROI: {plan.roi}</p>
                <p>Duration: {plan.duration}</p>
                <p>Min Investment: {plan.min}</p>
                <p>Max Investment: {plan.max}</p>
                <button className="btn-primary w-full">Invest Now</button>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-20 py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { step: "1", title: "Sign Up", desc: "Create your free investment account" },
            { step: "2", title: "Deposit Funds", desc: "Add crypto or fiat securely" },
            { step: "3", title: "Choose Plan", desc: "Select from our investment packages" },
            { step: "4", title: "Earn Returns", desc: "Receive profits directly to your wallet" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="text-yellow-400 text-4xl font-bold mb-2">{item.step}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <footer className="text-center py-16">
        <h3 className="text-2xl font-bold mb-4">Join thousands of investors today</h3>
        <button className="btn-primary">Get Started</button>
      </footer>
    </div>
  );
}
