import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import { ChipPicker } from "./ChipPicker";

const genreList = [
  "Arts & Entertainment",
  "Business & Technology",
  "Comedy",
  "Educational",
  "Fiction",
  "Games",
  "Lifestyle & Health",
  "History",
  "Kids & Family",
  "Leisure",
  "Music",
  "News & Politics",
  "Religion & Spirituality",
  "Science",
  "Society & Culture",
  "Sports & Recreation",
  "Stories",
  "TV & Film",
  "Technology",
  "True Crime",
];

const useStyles = makeStyles({
  card: {
    width: "28.75rem",
  },
  searchHeader: {
    paddingBottom: "0.6rem",
  },
  actions: {
    flexDirection: "row-reverse",
  },
});

export const AdvancedSearch = () => {
  const classes = useStyles();
  const [duration, setDuration] = useState<Date | null>(null);
  const [genres, setGenres] = useState<Array<string>>([]);
  const [publisher, setPublisher] = useState<string | null>(null);
  const [year, setYear] = useState<Date | null>(null);

  const resetFields = () => {
    setYear(null);
    setGenres([]);
    setDuration(null);
    setPublisher(null);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.searchHeader}>
          Advanced Search
        </Typography>
        <Grid container alignItems="flex-end" spacing={3}>
          <Grid item xs={6}>
            <KeyboardTimePicker
              ampm={false}
              autoOk
              label="Duration (hh:mm)"
              value={duration}
              variant="inline"
              onChange={setDuration}
            />
          </Grid>
          <Grid item xs={6}>
            <ChipPicker
              dropdownValues={genreList}
              genres={genres}
              setGenres={setGenres}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Publisher"
              value={publisher || ""}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDatePicker
              autoOk
              views={["year"]}
              label="Year"
              value={year}
              maxDate={new Date()}
              onChange={setYear}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button>Search</Button>
        <Button onClick={resetFields}>Reset</Button>
      </CardActions>
    </Card>
  );
};