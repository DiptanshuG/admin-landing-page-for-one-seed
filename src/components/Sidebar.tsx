import React from "react";
import { FaCogs, FaUserFriends, FaBook, FaUserCircle } from "react-icons/fa";

interface MenuItem {
  title: string;
  path: string;
  category: string;
}

const menuItems: MenuItem[] = [
  { title: "Dashboard", path: "/dashboard", category: "Analytics" },
  { title: "All Projects", path: "/all-projects", category: "All Projects" },
  { title: "Users", path: "/users", category: "All Projects" },
  { title: "Clients", path: "/clients", category: "All Projects" },
  { title: "Modules", path: "/modules", category: "All Projects" },
  { title: "Add Modules", path: "/add-modules", category: "All Projects" },
  { title: "Questions", path: "/questions", category: "All Projects" },
  { title: "Preview", path: "/preview", category: "All Projects" },
  { title: "Study Stack", path: "/study-stack", category: "All Projects" },
  { title: "Assignment", path: "/assignment", category: "All Projects" },
  { title: "Communication", path: "/communication", category: "Support" },
  { title: "Programs", path: "/programs", category: "Support" },
];

const Sidebar: React.FC = () => {
  const groupedMenuItems: { [key: string]: MenuItem[] } = {};
  menuItems.forEach((item) => {
    if (!groupedMenuItems[item.category]) {
      groupedMenuItems[item.category] = [];
    }
    groupedMenuItems[item.category].push(item);
  });

  return (
    <div className="bg-gray-200 w-64 py-4 px-2">
      {Object.entries(groupedMenuItems).map(([category, items]) => (
        <div key={category}>
          <div className="font-semibold text-[13px] mb-2 gradient-text mx-2">
            {category}
          </div>
          <ul> 
            {items.map((item) => (
              <li key={item.title} className={`flex items-center mb-2 p-4 rounded-xl ${
                item.title === "Assignment" || item.title === "Modules"
                  ? "custom-gradient"
                  : ""
              }`}>
              {getIconByTitle(item.title)}

                <a
                  href={item.path}
                  className={`sidebar-menu-item text-blue-600 font-[500] text-[14px]  hover:underline rounded ${
                    item.title === "Assignment" || item.title === "Modules"
                      ? "custom-gradient text-white"
                      : ""
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const getIconByTitle = (title: string) => {
    const iconColor = "#692CD4";
    switch (title) {
      case "Dashboard":
        return <FaCogs className="mr-2" style={{ color: iconColor }} />;
      case "Users":
        return <FaUserFriends className="mr-2" style={{ color: iconColor }} />;
      case "Modules":
        return <FaBook className="mr-2" style={{ color: iconColor }} />;
      default:
        return <FaUserCircle className="mr-2" style={{ color: iconColor }} />;
    }
  };
export default Sidebar;
