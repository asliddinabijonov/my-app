import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Login from "../Login";
import { Paper } from "@mui/material";
import Admin from "../Admin";
import User from "../User";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: "React.SyntheticEvent", newValue: "string") => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        elevation={24}
        sx={{
          width: { md: 500, sm: 500, xs: 300 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: 2,
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Admin" value="1" />
              <Tab label="User" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Admin />
          </TabPanel>
          <TabPanel value="2">
            <User />
          </TabPanel>
        </TabContext>
      </Paper>
    </Box>
  );
}
