import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../styles/Home.css";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="hero-title">
          {t("hero.title")} <span className="accent">{t("hero.titleAccent")}</span>
        </h1>
        <p className="hero-subtitle">{t("hero.subtitle")}</p>
        
        <div className="import-highlight">
          <span className="tag">{t("hero.newFeature")}</span>
          <h3>{t("hero.importTitle")}</h3>
          <p>{t("hero.importDescription")}</p>
        </div>
        
        <div className="hero-cta">
          <Link href="/download" className="btn btn-primary">
            {t("hero.primaryCTA")}
          </Link>
          <Link href="/features" className="btn btn-secondary">
            {t("hero.secondaryCTA")}
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src="/images/app-preview.png" alt="Chowboy App Preview" />
      </motion.div>
    </section>
  );
} 