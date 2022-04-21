import React from 'react';
import { useTranslation } from 'react-i18next';

function Book({ poems, tracked }) {
    const { t } = useTranslation();



    return (
        <div>
            <article className="row">
                <h3 className="col-md-3">{t('booksTrans.author')}</h3>
                <h3 className="col-md-3">{t('booksTrans.name')}</h3>
                <h3 className="col-md-3">{t('booksTrans.style')}</h3>
                <h3 className="col-md-3">{t('booksTrans.issueDate')}</h3>
            </article>

            {
                poems.filter((name) =>
                    name.author
                        .toLocaleLowerCase()
                        .includes(tracked.toLocaleLowerCase()))
                    .map((book) => {
                        return (
                            <article key={book.id} className="row">
                                <div className="col-md-3 ">{book.author}</div>
                                <div className="col-md-3">{book.name}</div>
                                <div className="col-md-3">{book.species}</div>
                                <div className="col-md-3">{book.date}</div>
                            </article>
                        )
                    })
            }
        </div>
    )
}


export default Book;