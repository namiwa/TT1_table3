import { Box } from "@mui/material";

const Item = (props) => {
  const { key, value } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: "grey.100",
        color: "grey.800",
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
      {...`${key}: ${value}`}
    />
  );
};

export default Item;
