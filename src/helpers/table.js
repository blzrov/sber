import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

export const icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export const localization = {
  pagination: {
    labelDisplayedRows: "{from}-{to} из {count}",
    labelRowsSelect: "Строк",
    firstTooltip: "1 Страница",
    previousTooltip: "Предыдущая Страница",
    nextTooltip: "Следующая Страница",
    lastTooltip: "Последняя Страница",
  },
  body: {
    emptyDataSourceMessage: "Ничего не найдено",
    filterRow: {
      filterTooltip: "Поиск по столбцу",
    },
    addTooltip: "Добавить строку",
    editTooltip: "Редактировать",
    deleteTooltip: "Удалить",
    editRow: {
      deleteText: <div className="row-delete-prompt">Вы уверены, что хотите удалить эту строку?</div>,
      saveTooltip: "Ок",
      cancelTooltip: "Отмена",
    },
  },
  header: {
    actions: "Действ.",
  },
  toolbar: {
    searchTooltip: "Поиск",
    searchPlaceholder: "Поиск",
  },
};

export const options = {
  filterCellStyle: {
    padding: "8px 16px",
  },
  filtering: true,
  sorting: true,
  paging: false,
  toolbar: true,
  columnsButton: true,
};
