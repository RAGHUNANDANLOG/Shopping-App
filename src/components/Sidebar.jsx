import React from 'react';

const categories = ['Electronics', 'Furniture', 'Clothing', 'Books', 'Accessories'];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <div
    style={{
      width: '220px',
      background: '#ffffff',
      padding: '1.5rem 1rem',
      borderRight: '1px solid #ddd',
      boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
      height: '100vh',
      overflowY: 'auto',
    }}
  >
    <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#333' }}>Categories</h3>
    {categories.map((cat) => (
      <div
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        style={{
          padding: '0.5rem 1rem',
          marginBottom: '0.5rem',
          borderRadius: '8px',
          background: selectedCategory === cat ? '#007bff' : 'transparent',
          color: selectedCategory === cat ? '#fff' : '#333',
          cursor: 'pointer',
          fontWeight: selectedCategory === cat ? '600' : '400',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = selectedCategory === cat ? '#0056b3' : '#f0f0f0';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = selectedCategory === cat ? '#007bff' : 'transparent';
        }}
      >
        {cat}
      </div>
    ))}
  </div>
);

export default Sidebar;
