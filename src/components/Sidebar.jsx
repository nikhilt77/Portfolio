import React from "react";
// Import any necessary components or icons

const Sidebar = ({ activeSection }) => {
  // List of navigation items
  const navItems = [
    { id: "landing", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "profiles", label: "Profiles" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 h-screen w-64 text-white p-6">
      <div className="text-2xl font-bold mb-8">Portfolio</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="mb-4">
              <button
                onClick={() => handleNavigation(item.id)}
                className={`w-full text-left py-2 px-4 rounded transition-colors ${
                  activeSection === item.id
                    ? "bg-red-900 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
