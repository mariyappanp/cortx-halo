/*
 * CORTX-CSM: CORTX Management web and CLI interface.
 * Copyright (c) 2022 Seagate Technology LLC and/or its Affiliates
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 * For any questions about this software or licensing,
 * please email opensource@seagate.com or cortx-questions@seagate.com.
 */
export const lrAlertConst = {
  searchConfig: {
    placeholder: "Search",
    advanceForm: [
      {
        type: "date",
        name: "updateDate",
        label: "Update Date",
        placeholder: "Time Period",
        value: "",
      },
      {
        type: "textbox",
        name: "resourceInfo",
        label: "Resource Info",
        placeholder: "Enter resource Info",
        value: "",
      },
      {
        type: "textbox",
        name: "description",
        label: "Description",
        placeholder: "Enter description",
        value: "",
      },
      {
        type: "dropdown",
        name: "status",
        label: "Status",
        placeholder: "select",
        options: [],
        required: false,
        value: "",
      },
      {
        type: "dropdown",
        name: "severity",
        label: "Severity",
        placeholder: "select",
        options: [],
        required: false,
        value: "",
      },
      {
        type: "dropdown",
        name: "category",
        label: "Category",
        placeholder: "select",
        options: [],
        value: "",
      },
    ],
  },
  alertTable: {
    isMultiSelect: true,
    itemKey: "alert_uuid",
    headers: [
      {
        text: "Alert Time",
        align: "start",
        value: "updated_time",
        type: "date",
        width: "175px",
      },
      { text: "Category", value: "category", width: "125px" },
      {
        text: "Severity",
        value: "severity",
        type: "custom",
        width: "125px",
        align: "middle",
      },
      { text: "State", value: "state", width: "125px" },
      { text: "Description", value: "description", type: "custom" },
      { text: "Alert Type", value: "alert_type", width: "135px" },
      {
        text: "",
        value: "action",
        type: "action",
        align: "end",
        sortable: false,
        zoomIcon: true,
        actionList: ["notification", "comment"],
      },
    ],
    multiSelectButtons: [
      { name: "acknowledge", label: "Acknowledge", color: "csmprimary" },
      { name: "clear", label: "Clear", color: "csmprimary" },
    ],
  },
  severityList: {
    warning: "yellow",
    fatal: "green",
    critical: "grey",
    error: "red",
    informational: "blue",
  },
};
