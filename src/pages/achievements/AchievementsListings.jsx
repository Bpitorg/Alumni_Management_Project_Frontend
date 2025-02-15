import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { achievements } from "../../constants/dummyData";
import SearchSort from "../../page-components/achievements/SearchSort";
import SidebarFilters from "../../page-components/achievements/SideBarFilters";
import AchievementCard from "../../page-components/achievements/AchievementCard";

const AchievementsListings = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  // Filter achievements based on search, category, and filters
  const filteredAchievements = achievements
    .filter(
      (achievement) =>
        achievement.title.toLowerCase().includes(search.toLowerCase()) &&
        (category ? achievement.category === category : true) &&
        (filters.batch ? achievement.batch === filters.batch : true) &&
        (filters.experienceLevel
          ? achievement.experienceLevel === filters.experienceLevel
          : true) &&
        (filters.remote !== undefined ? achievement.remote === filters.remote : true)
    );

  const achievementsPerPage = 10;
  const totalPages = Math.ceil(filteredAchievements.length / achievementsPerPage);
  const paginatedAchievements = filteredAchievements.slice(
    (page - 1) * achievementsPerPage,
    page * achievementsPerPage
  );

  useEffect(() => {
    //console.log("Updated Filters:", filters);
    setPage(1);
  }, [filters]);

  return (
    <div className="p-6">
      <SearchSort
        onSearch={(query) => setSearch(query)}
        onSort={(sortOption) => console.log("Sort:", sortOption)}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <div className="sticky top-6">
            <SidebarFilters onApply={(filtersTemp) => setFilters(filtersTemp)} />
          </div>
        </div>

        <div className="md:col-span-3 mt-10">
          <div className="max-h-[600px] overflow-y-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paginatedAchievements.length > 0 ? (
                paginatedAchievements.map((achievement) => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500">No achievements found.</p>
              )}
            </div>
          </div>
          
          {filteredAchievements.length > 10 && (
            <div className="mt-4 flex justify-center">
              <Pagination
                count={totalPages}
                page={page}
                onChange={(event, value) => setPage(value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementsListings;
