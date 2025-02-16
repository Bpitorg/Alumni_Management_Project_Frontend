import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const JobsPanel = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-screen">
      <aside className="hidden md:block md:col-span-3 bg-gray-100 p-4 border-r">
        <Sidebar />
      </aside>

      <main className="col-span-1 md:col-span-6 flex flex-col">
        <SearchBar />
        <div className="overflow-auto p-4">
          <JobList onSelectJob={setSelectedJob} />
        </div>
      </main>
      <aside className="col-span-1 md:col-span-3 bg-gray-50 p-4 border-l relative">
        {/* Close Button */}
        <IconButton
          onClick={() => setSelectedJob(null)} // Function to hide the sidebar
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "gray.200",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <JobDetails job={selectedJob} />
      </aside>
    </div>
  );
};

export default JobsPanel;
