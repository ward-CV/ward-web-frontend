"use client";

import React, { useState } from "react";
import { IconType } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  id: number;
  label: string;
  icon?: IconType;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  tabs: Tab[];
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabs }) => {
  const [activeTabId, setActiveTabId] = useState<number>(tabs[0].id);

  return (
    <div className="flex w-full bg-white rounded-lg shadow overflow-hidden">
      {/* Список вкладок */}
      <div className="w-1/6 bg-blue-50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          console.log("Icon:", Icon);
          const isActive = activeTabId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`w-full flex items-center px-4 py-3 text-left focus:outline-none transition-colors duration-200 ${
                isActive
                  ? "bg-white font-semibold text-blue-600"
                  : "hover:bg-gray-200"
              }`}
            >
              {Icon && (
                <div className="mr-3 h-6 w-6 flex-shrink-0">
                  <Icon className="h-full w-full text-gray-600" />
                </div>
              )}
              <span className="mt-1 md:mt-0 md:ml-3 text-xs md:text-base hidden md:block">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Контентная область */}
      <div className="w-3/4 p-6">
        <AnimatePresence mode="wait">
          {tabs.map((tab) =>
            activeTabId === tab.id ? (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VerticalTabs;
