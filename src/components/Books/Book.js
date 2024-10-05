import React from "react";
import { useTranslation } from "react-i18next";

function Book({ poems, tracked }) {
  // Destructure t function from useTranslation hook for translations
  const { t } = useTranslation();

  return (
    <div>
      {/* Table header section */}
      <article className="row">
        {/* Translate table column headers using t function from i18n */}
        <h3 className="col-md-3">{t("booksTrans.author")}</h3>
        <h3 className="col-md-3">{t("booksTrans.name")}</h3>
        <h3 className="col-md-3">{t("booksTrans.style")}</h3>
        <h3 className="col-md-3">{t("booksTrans.issueDate")}</h3>
      </article>

      {/* Filter poems array based on author name (tracked state), ignoring case */}
      {poems
        .filter((name) =>
          name.author.toLocaleLowerCase().includes(tracked.toLocaleLowerCase())
        )
        // Map over the filtered list of books to render each book's information
        .map((book) => {
          return (
            <article key={book.id} className="row">
              {/* Display book author */}
              <div className="col-md-3 ">{book.author}</div>
              {/* Display book name */}
              <div className="col-md-3">{book.name}</div>
              {/* Display book genre/style */}
              <div className="col-md-3">{book.species}</div>
              {/* Display book publication date */}
              <div className="col-md-3">{book.date}</div>
            </article>
          );
        })}
    </div>
  );
}

export default Book;
