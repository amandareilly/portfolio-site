import React from 'react';

import '../../css/pageSections/header.scss';

export default function ComponentName(props) {
    return (
        <div className="page-header">
            <h1 className="page-heading">
                <span className="open-tag">&lt;<span className="tag-name">developer</span> <span className="attr-name">class</span>="<span className="attr-value">full-stack</span>"&gt;</span>
                <span className="tag-content">Amanda Reilly</span>
                <span className="close-tag">&lt;/<span className="tag-name">developer</span>&gt;</span>
            </h1>
        </div>
    );
}