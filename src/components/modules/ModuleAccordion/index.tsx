import React, { useState } from "react";
import styles from "./ModuleAccordion.module.css";

interface ModuleAccordionProps {
  position: number;
  title: string;
  description: string;
}

const ModuleAccordion: React.FC<{ module: ModuleAccordionProps }> = ({
  module,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={() => setOpen(!open)}>
        <div className={styles.headerContainer}>
          <div className={`${styles.headerInfo} ${styles.headerOpenContent}`}>
            {/* {icons[module.moduleId]} */}
            <span>{module.position}</span>

            <span>{module.title}</span>
            {/* {module.services?.length > 0 && assigned && (
            <ExpandMore
              className={`${isOpen && styles.expandIconActive} ${
                styles.expandIcon
              }`}
            />
          )} */}
          </div>
          {/* <SovosSwitch
          onChange={(e) =>
            handleCheckedModules(e.target.checked, module, assigned)
          }
          checked={module.isActive ?? false}
          inputProps={{ 'aria-label': 'controlled' }}
        /> */}
        </div>
        <div
          className={`${open && styles.contentShow} ${styles.accordionContent}`}
        >
          <ul>
            <p>{module.description}</p>
            {/* {module.services.map((service, i) => (
              <li key={i} className={styles.services}>
                <SovosRadio
                  checked={service.isActive}
                  onChange={(e) =>
                    handleCheckedServices(
                      service.id,
                      module,
                      e.target.checked
                    )
                  }
                />
                <span>{service.name}</span>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModuleAccordion;
