// src/components/SearchBar.js
"use client";
export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-3">
      <input
        type="search"
        className="form-control"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
