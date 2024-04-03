"use client";
import ModuleAccordion from "@/components/modules/ModuleAccordion";
import ModulesInfo from "@/utils/modules_info.json";

export default function Modules() {
  console.log(Object.values(ModulesInfo));
  return (
    <main className="page-container general-container">
      {Object.values(ModulesInfo).map((module) => (
        <ModuleAccordion module={module} key={module.position} />
      ))}
    </main>
  );
}
