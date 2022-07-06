import React, { useEffect } from "react";
import styles from "./index.module.css";
import ArrowDown from "@site/static/img/svgIcons/arrowDown.svg";
import ArrowUp from "@site/static/img/svgIcons/arrowUp.svg";
import Delete from "@site/static/img/svgIcons/delete.svg";
import Filter from "@site/static/img/svgIcons/filter.svg";
import Close from "@site/static/img/svgIcons/close.svg";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: { x: "100%", duration: 0.25 },
  animate: { x: 0, duration: 0.25 },
  exit: { x: "100%", duration: 0.25 },
};
const languageOptions = ["Motoko", "Rust", "Javascript"];
const domainOptions = ["Global", "Gaming", "DeFi", "Website", "NFT"];
const levelOptions = ["Beginner", "Intermediate", "Advanced"];
const contentTypeOptions = [
  "Code Samples",
  "Videos",
  "Documentation",
  "Live Demos",
];
const sortByOptions = ["Relevance", "A to Z", "Z to A"];

function Index({
  numberOfItems,
  selectedLanguages,
  setSelectedLanguages,
  selectedDomains,
  setSelectedDomains,
  selectedLevels,
  setSelectedLevels,
  selectedContentTypes,
  setSelectedContentTypes,
  selectedSortBy,
  setSelectedSortBy,
}) {
  const [currentSelection, setCurrentSelection] = React.useState(null);
  const [displayMobileFilters, setDisplayMobileFilters] = React.useState(false);
  const selectBoxesRef = React.useRef(null);
  const updateCurrentSelection = (selection) => {
    if (selection === currentSelection) {
      setCurrentSelection(null);
    } else setCurrentSelection(selection);
  };

  const clearFilters = () => {
    setSelectedLanguages([]);
    setSelectedDomains([]);
    setSelectedLevels([]);
    setSelectedContentTypes([]);
    setSelectedSortBy("Relevance");
    setCurrentSelection(null);
  };
  const updateSelectedLanguages = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(
        selectedLanguages.filter((item) => item !== language)
      );
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };
  const updateSelectedDomains = (domain) => {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains(selectedDomains.filter((item) => item !== domain));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };
  const updateSelectedLevels = (level) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter((item) => item !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };
  const updateSelectedContentTypes = (contentType) => {
    if (selectedContentTypes.includes(contentType)) {
      setSelectedContentTypes(
        selectedContentTypes.filter((item) => item !== contentType)
      );
    } else {
      setSelectedContentTypes([...selectedContentTypes, contentType]);
    }
  };

  const updateSelectedSortBy = (contentType) => {
    setSelectedSortBy(contentType);
    setCurrentSelection(null);
  };
  const handleClick = (event) => {
    if (
      selectBoxesRef.current !== event.target &&
      !selectBoxesRef.current.contains(event.target)
    ) {
      setCurrentSelection(null);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <a id="start" />
      <div className={styles.container}>
        <div className={styles.filterBarHeader}>
          <span className={styles.title}>Sample codes</span>
          <span className={styles.numberOfItems}>{numberOfItems}</span>
        </div>
        <div
          className={styles.mobileFilterBarHeader}
          onClick={() => setDisplayMobileFilters(true)}
        >
          <div className={styles.filterIcon}>
            <Filter />
          </div>
          <span className={styles.title}>Sample codes</span>
          <span className={styles.numberOfItems}>{numberOfItems}</span>
        </div>
        <div ref={selectBoxesRef} className={styles.selectBoxes}>
          <div className={styles.selectBoxContainer}>
            <div
              className={styles.selectBox}
              style={{
                color: selectedLanguages.length > 0 ? "#3B00B9" : "black",
              }}
              onClick={() => updateCurrentSelection("language")}
            >
              <p className={styles.selectTitle}>Language</p>
              <div className={styles.selectionArrow}>
                {currentSelection === "language" ? <ArrowUp /> : <ArrowDown />}
              </div>
            </div>
            {currentSelection === "language" && (
              <div className={styles.selectOptionsContainer}>
                <div className={styles.selectOptions}>
                  {languageOptions.map((language) => (
                    <label key={language} className={styles.selectOption}>
                      <input
                        type="checkbox"
                        key={language}
                        value={language}
                        checked={selectedLanguages.includes(language)}
                        onChange={(e) =>
                          updateSelectedLanguages(e.target.value)
                        }
                      />
                      {language}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.selectBoxContainer}>
            <div
              className={styles.selectBox}
              style={{
                color: selectedDomains.length > 0 ? "#3B00B9" : "black",
              }}
              onClick={() => updateCurrentSelection("domain")}
            >
              <p className={styles.selectTitle}>Domain</p>
              <div className={styles.selectionArrow}>
                {currentSelection === "domain" ? <ArrowUp /> : <ArrowDown />}
              </div>
            </div>
            {currentSelection === "domain" && (
              <div className={styles.selectOptionsContainer}>
                <div className={styles.selectOptions}>
                  {domainOptions.map((domain) => (
                    <label key={domain} className={styles.selectOption}>
                      <input
                        type="checkbox"
                        key={domain}
                        value={domain}
                        checked={selectedDomains.includes(domain)}
                        onChange={(e) => updateSelectedDomains(e.target.value)}
                      />
                      {domain}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.selectBoxContainer}>
            <div
              className={styles.selectBox}
              style={{ color: selectedLevels.length > 0 ? "#3B00B9" : "black" }}
              onClick={() => updateCurrentSelection("level")}
            >
              <p className={styles.selectTitle}>Level</p>
              <div className={styles.selectionArrow}>
                {currentSelection === "level" ? <ArrowUp /> : <ArrowDown />}
              </div>
            </div>
            {currentSelection === "level" && (
              <div className={styles.selectOptionsContainer}>
                <div className={styles.selectOptions}>
                  {levelOptions.map((level) => (
                    <label key={level} className={styles.selectOption}>
                      <input
                        type="checkbox"
                        key={level}
                        value={level}
                        checked={selectedLevels.includes(level)}
                        onChange={(e) => updateSelectedLevels(e.target.value)}
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.selectBoxContainer}>
            <div
              className={styles.selectBox}
              style={{
                color: selectedContentTypes.length > 0 ? "#3B00B9" : "black",
              }}
              onClick={() => updateCurrentSelection("contentType")}
            >
              <p className={styles.selectTitle}>Content Type</p>
              <div className={styles.selectionArrow}>
                {currentSelection === "contentType" ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}
              </div>
            </div>
            {currentSelection === "contentType" && (
              <div className={styles.selectOptionsContainer}>
                <div className={styles.selectOptions}>
                  {contentTypeOptions.map((contentType) => (
                    <label key={contentType} className={styles.selectOption}>
                      <input
                        type="checkbox"
                        key={contentType}
                        value={contentType}
                        checked={selectedContentTypes.includes(contentType)}
                        onChange={(e) =>
                          updateSelectedContentTypes(e.target.value)
                        }
                      />
                      {contentType}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          {(selectedLanguages.length > 0 ||
            selectedDomains.length > 0 ||
            selectedLevels.length > 0 ||
            selectedContentTypes.length > 0) && (
            <div onClick={() => clearFilters()} className={styles.clearFilters}>
              <p style={{ marginBottom: 0, marginRight: "6px" }}>
                Delete all filters
              </p>
              <Delete />
            </div>
          )}
        </div>
        {/*<div className={styles.sortByContainer}>
          <div
            className={styles.sortBy}
            onClick={() => updateCurrentSelection("sortBy")}
          >
            <p>Sort By</p>
            <div className={styles.selectionArrow}>
              {isSelectingSortBy ? <ArrowUp /> : <ArrowDown />}
            </div>
          </div>
          {isSelectingSortBy && (
            <div className={styles.sortByOptionsContainer}>
              <div className={styles.selectOptions}>
                {sortByOptions.map((sortOption) => (
                  <label key={sortOption} className={styles.selectOption}>
                    <input
                      type="checkbox"
                      key={sortOption}
                      value={sortOption}
                      checked={selectedSortBy.includes(sortOption)}
                      onChange={(e) => updateSelectedSortBy(e.target.value)}
                    />
                    {sortOption}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>*/}
      </div>
      <div className={styles.mobileFilterBarButtonContainer}>
        <div
          className={styles.mobileFilterBarButton}
          onClick={() => setDisplayMobileFilters(true)}
        >
          <div className={styles.filterIcon}>
            <Filter />
          </div>
          <span className={styles.title}>Sample codes</span>
          <span className={styles.numberOfItems}>{numberOfItems}</span>
        </div>
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        {displayMobileFilters && (
          <motion.div
            key="mobileFilterBar"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2, ease: "linear" }}
            className={clsx(styles.mobileFilterBar)}
          >
            <div className={styles.mobileFilterContainer}>
              <div
                onClick={() => setDisplayMobileFilters(false)}
                className={styles.closeIcon}
              >
                <Close />
              </div>
              <p className={styles.mobileFilterTitle}>Sample codes</p>
              <div className={styles.mobileSelectContainer}>
                <p>Language</p>
                <div className={styles.mobileFilterOptions}>
                  {languageOptions.map((language) => (
                    <label key={language} className={styles.selectOption}>
                      <input
                        type="checkbox"
                        key={language}
                        value={language}
                        checked={selectedLanguages.includes(language)}
                        onChange={(e) =>
                          updateSelectedLanguages(e.target.value)
                        }
                      />
                      {language}
                    </label>
                  ))}
                </div>
                <p>Domain</p>
                <div className={styles.mobileFilterOptions}>
                  {domainOptions.map((domain) => (
                    <label key={domain} className={styles.selectOption}>
                      <input
                        type="checkbox"
                        key={domain}
                        value={domain}
                        checked={selectedDomains.includes(domain)}
                        onChange={(e) => updateSelectedDomains(e.target.value)}
                      />
                      {domain}
                    </label>
                  ))}
                </div>
                <p>Level</p>
                <div className={styles.mobileFilterOptions}>
                  {levelOptions.map((level) => (
                    <label key={level} className={styles.selectOption}>
                      <input
                        type="checkbox"
                        key={level}
                        value={level}
                        checked={selectedLevels.includes(level)}
                        onChange={(e) => updateSelectedLevels(e.target.value)}
                      />
                      {level}
                    </label>
                  ))}
                </div>
                <p>Content Type</p>
                <div className={styles.mobileFilterOptions}>
                  {contentTypeOptions.map((contentType) => (
                    <label key={contentType} className={styles.selectOption}>
                      <input
                        type="checkbox"
                        key={contentType}
                        value={contentType}
                        checked={selectedContentTypes.includes(contentType)}
                        onChange={(e) =>
                          updateSelectedContentTypes(e.target.value)
                        }
                      />
                      {contentType}
                    </label>
                  ))}
                </div>

                <Link
                  to={"#start"}
                  className={styles.mobileFilterButton}
                  onClick={() => setDisplayMobileFilters(false)}
                >
                  <span>Apply Filters</span>
                </Link>
                <Link
                  to={"#start"}
                  className={styles.mobileFilterClearButton}
                  onClick={() => {
                    clearFilters();
                    setDisplayMobileFilters(false);
                  }}
                >
                  <span>Clear Filters</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Index;
