import React from 'react';

import './button.css';

export function ButtonPrimary({value}) {
  return (
    <button type="button" className="btn btn-primary">
      {value}
    </button>
  );
}

export function ButtonLink({value}) {
  return (
    <button type="button" className="btn btn-link">
      {value}
    </button>
  );
}

 