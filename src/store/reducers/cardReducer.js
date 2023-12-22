import { svgData } from "../../data/data";
import { COLOR_SELECT, FILTER_DATA, SVG_SELECT } from "../actions/action";

const gradients = [
  {
    id: 1,
    background:
      "linear-gradient(113.06deg, #141313 7.79%, #61605e 30.47%, #36312b 55%, #464646 78.6%,  #757573 96.64% )",
    svgColor: "white",
  },
  {
    id: 2,
    background: "linear-gradient(45deg, black, white)",
    svgColor: "white",
  },

  {
    id: 3,
    background: "linear-gradient(45deg, black, gold)",
    svgColor: "gold",
  },

  {
    id: 4,
    background: "linear-gradient(45deg, gold, white)",
    svgColor: "black",
  },
  {
    id: 5,
    background: "linear-gradient(45deg, gold, black)",
    svgColor: "black",
  },
];

const defaultColor = {
  id: 1,
  background:
    "linear-gradient(113.06deg, #141313 7.79%, #61605e 30.47%, #36312b 55%, #464646 78.6%,  #757573 96.64% )",
  svgColor: "white",
};

const svgSelect = null;

const initialData = {
  data: svgData,
  defaultColor: defaultColor,
  svgSelect: svgSelect,
  gradients: gradients,
  filteredData: svgData,
};

export const cardReducer = (state = initialData, action) => {
  switch (action.type) {
    case SVG_SELECT:
      const selectedSvg = state.data.filter((svg) => {
        return svg.id === action.payload;
      });
      return { ...state, svgSelect: selectedSvg };
      break;

    case COLOR_SELECT:
      return { ...state, defaultColor: action.payload };
      break;

    case FILTER_DATA:
      if (action.payload === "all") {
        return { ...state, filteredData: state.data };
      } else {
        const newData = state.data.filter((data) => {
          return data.category === action.payload || data.content === null;
        });
        return { ...state, filteredData: newData };
      }
      break;

    default:
      return state;
      break;
  }
};
