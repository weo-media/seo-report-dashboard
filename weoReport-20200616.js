(()=>{
//************* start tally boxes *************
// svg icons for tally box defaults
const allIcons = {
  calendar: '<svg class=\"tally-calendar\" width=\"52\" height=\"49\" viewBox=\"0 0 52 49\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <g id=\"tallyCalendar-Group\"> <path id=\"tallyCalendar-Vector\" d=\"M9.24817 26.5736L12.0693 29.3947\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_2\" d=\"M12.0693 26.5736L9.24817 29.3947\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> </g> <g id=\"tallyCalendar-Group_2\"> <path id=\"tallyCalendar-Vector_3\" d=\"M19.3235 26.5736L22.0103 29.3947\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_4\" d=\"M22.0103 26.5736L19.3235 29.3947\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> </g> <g id=\"tallyCalendar-Group_3\"> <path id=\"tallyCalendar-Vector_5\" d=\"M29.2646 26.5736L32.0857 29.3947\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_6\" d=\"M32.0857 26.5736L29.2646 29.3947\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> </g> <path id=\"tallyCalendar-Vector_7\" d=\"M46.7285 5.88574H50.3557V47.3963H1.45654V5.88574H7.6361\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_8\" d=\"M15.5621 1.45239H9.24817V10.1844H15.5621V1.45239Z\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_9\" d=\"M42.564 1.45239H36.2501V10.1844H42.564V1.45239Z\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_10\" d=\"M1.45654 15.6922H45.6538\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_11\" d=\"M8.84521 21.7374H12.4723\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_12\" d=\"M18.7864 21.7374H22.5478\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_13\" d=\"M28.8616 21.7374H32.4887\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_14\" d=\"M38.9369 21.7374H42.564\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_15\" d=\"M38.9369 28.3199H42.564\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_16\" d=\"M8.84521 34.9025H12.4723\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_17\" d=\"M18.7864 34.9025H22.5478\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_18\" d=\"M28.8616 34.9025H32.4887\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_19\" d=\"M38.9369 34.9025H42.564\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_20\" d=\"M8.84521 41.4853H12.4723\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_21\" d=\"M18.7864 41.4853H22.5478\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_22\" d=\"M28.8616 41.4853H32.4887\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_23\" d=\"M38.9369 41.4853H42.564\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_24\" d=\"M19.7264 5.88574H36.25\" stroke=\"currentColor\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> </g> </svg>',
  phone: '<svg class=\"tally-phone-calls\" width=\"49\" height=\"48\" viewBox=\"0 0 49 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <path id=\"tally-phone-calls-Vector 2\" d=\"M26.0013 3.0816C38.5072 3.0816 46.376 12.9176 46.376 23.5968\" stroke=\"currentColor\" stroke-width=\"1.68618\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path id=\"tally-phone-calls-phone  1\" d=\"M14.79 18.768C13.7457 17.18 13.9778 16.7263 13.9778 16.7263L17.1107 12.3026C17.923 11.1683 17.807 9.69368 16.8787 8.67282L10.2647 2.43423C9.33639 1.52679 7.94396 1.41336 6.89965 2.20737L3.99877 4.24909C3.7667 4.47595 3.53463 4.70281 3.41859 4.92966C-2.1511 12.5294 5.62326 24.326 15.1381 33.6272C24.421 42.7015 37.0688 50.755 44.6111 44.9701C44.8432 44.8567 44.9592 44.6298 45.1913 44.403L47.3959 41.5672C48.2082 40.5464 48.0922 39.0718 47.1639 38.1644L40.6659 31.9258C39.6216 30.9049 38.1131 30.9049 36.9528 31.6989L32.4274 34.7615C32.4274 34.7615 30.5708 35.4421 21.8682 26.9349C18.7352 23.8723 16.8787 21.7172 15.6023 20.2426C15.3702 19.562 15.0221 19.1083 14.79 18.768Z\" stroke=\"currentColor\" stroke-width=\"1.68618\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" stroke-linejoin=\"round\"/> <path id=\"tally-phone-calls-Vector 1\" d=\"M26.1418 10.5289C34.1512 10.5289 38.9287 16.29 38.9287 23.5967\" stroke=\"currentColor\" stroke-width=\"1.68618\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> </g> </svg>',
  scatterPlot: '<svg id=\"scatter-plot-icon\" width=\"89\" height=\"89\" viewBox=\"0 0 89 89\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M77.1797 68.8359H17.3828V14.6016C17.3828 14.2191 17.0699 13.9062 16.6875 13.9062H11.8203C11.4379 13.9062 11.125 14.2191 11.125 14.6016V74.3984C11.125 74.7809 11.4379 75.0938 11.8203 75.0938H77.1797C77.5621 75.0938 77.875 74.7809 77.875 74.3984V69.5312C77.875 69.1488 77.5621 68.8359 77.1797 68.8359ZM25.0312 52.4961C25.0312 53.9714 25.6173 55.3862 26.6605 56.4294C27.7036 57.4725 29.1185 58.0586 30.5938 58.0586C32.069 58.0586 33.4839 57.4725 34.527 56.4294C35.5702 55.3862 36.1562 53.9714 36.1562 52.4961C36.1562 51.0208 35.5702 49.606 34.527 48.5628C33.4839 47.5196 32.069 46.9336 30.5938 46.9336C29.1185 46.9336 27.7036 47.5196 26.6605 48.5628C25.6173 49.606 25.0312 51.0208 25.0312 52.4961ZM35.2871 33.0273C35.2871 34.1338 35.7266 35.1949 36.509 35.9773C37.2914 36.7597 38.3525 37.1992 39.459 37.1992C40.5654 37.1992 41.6266 36.7597 42.4089 35.9773C43.1913 35.1949 43.6309 34.1338 43.6309 33.0273C43.6309 31.9209 43.1913 30.8598 42.4089 30.0774C41.6266 29.295 40.5654 28.8555 39.459 28.8555C38.3525 28.8555 37.2914 29.295 36.509 30.0774C35.7266 30.8598 35.2871 31.9209 35.2871 33.0273V33.0273ZM49.0195 52.8438C49.0195 55.0567 49.8986 57.1789 51.4634 58.7437C53.0281 60.3084 55.1504 61.1875 57.3633 61.1875C59.5762 61.1875 61.6984 60.3084 63.2632 58.7437C64.828 57.1789 65.707 55.0567 65.707 52.8438C65.707 50.6308 64.828 48.5086 63.2632 46.9438C61.6984 45.3791 59.5762 44.5 57.3633 44.5C55.1504 44.5 53.0281 45.3791 51.4634 46.9438C49.8986 48.5086 49.0195 50.6308 49.0195 52.8438V52.8438ZM61.8828 25.5527C61.8828 26.8436 62.3956 28.0816 63.3084 28.9944C64.2212 29.9071 65.4591 30.4199 66.75 30.4199C68.0409 30.4199 69.2788 29.9071 70.1916 28.9944C71.1044 28.0816 71.6172 26.8436 71.6172 25.5527C71.6172 24.2619 71.1044 23.0239 70.1916 22.1111C69.2788 21.1983 68.0409 20.6855 66.75 20.6855C65.4591 20.6855 64.2212 21.1983 63.3084 22.1111C62.3956 23.0239 61.8828 24.2619 61.8828 25.5527V25.5527Z\"></path> </svg>',
  radarGraph: '<svg id=\"radar-graph-icon\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M90.5078 38.7793L51.8359 10.6543C51.3033 10.2641 50.6602 10.0537 50 10.0537C49.3397 10.0537 48.6967 10.2641 48.1641 10.6543L9.49218 38.7793C8.95814 39.1676 8.56084 39.715 8.35732 40.3431C8.1538 40.9713 8.15451 41.6477 8.35937 42.2754L23.1348 87.7832C23.3387 88.4101 23.7357 88.9564 24.2689 89.3441C24.8021 89.7317 25.4443 89.9408 26.1035 89.9414H73.9062C75.2637 89.9414 76.4551 89.0723 76.875 87.7832L91.6504 42.2754C92.0605 40.9863 91.6016 39.5801 90.5078 38.7793V38.7793ZM81.8945 40.7227L72.2754 43.8477L52.7441 29.7168V19.5215L81.8945 40.7227ZM45.5078 55.3906L36.8066 67.334L31.416 50.8105L45.5078 55.3906ZM34.1504 45.9375L47.2656 36.4551V50.2051L34.1504 45.9375ZM50 58.5156L59.1699 71.1035H40.8301L50 58.5156ZM52.7441 36.4551L65.8496 45.9375L52.7441 50.1953V36.4551V36.4551ZM54.4922 55.3906L68.584 50.8105L63.1934 67.334L54.4922 55.3906ZM47.2656 19.5215V29.7168L27.7246 43.8477L18.1055 40.7227L47.2656 19.5215V19.5215ZM16.5332 45.9766L24.9805 48.7207L32.832 72.7832L27.5781 80L16.5332 45.9766V45.9766ZM31.9434 83.3008L36.8555 76.5625H63.1543L68.0664 83.3008H31.9434ZM72.4219 80L67.168 72.7832L75.0195 48.7207L83.4668 45.9766L72.4219 80Z\"></path> </svg>',
  doughnutChart: '<svg id=\"doughnut-chart-icon\" width=\"75\" height=\"75\" viewBox=\"0 0 75 75\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M40.625 18.75C48.4594 20.0719 54.9281 26.5406 56.25 34.375H68.75C67.2781 19.6344 55.3656 7.72187 40.625 6.25V18.75Z\"></path> <path d=\"M56.2501 40.625C54.7563 49.4781 46.9313 56.0906 37.6594 56.0906C27.3188 56.0906 18.9094 47.6813 18.9094 37.3406C18.9094 28.0688 25.5219 20.2437 34.375 18.75V6.25C18.6063 7.825 6.40942 21.1656 6.40942 37.3406C6.40942 54.5719 20.4282 68.5906 37.6594 68.5906C53.8344 68.5906 67.1751 56.3938 68.7501 40.625H56.2501V40.625Z\"></path> </svg>',
  pieChart2: '<svg id=\"pie-chart2-icon\" width=\"77\" height=\"77\" viewBox=\"0 0 77 77\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M41.7083 6.58032V35.2917H70.4197C68.9118 20.158 56.842 8.08824 41.7083 6.58032V6.58032ZM57.6505 64.1795C64.6736 58.9275 69.5021 50.897 70.4197 41.7084H44.1659L57.6505 64.1795Z\"></path> <path d=\"M35.2917 38.5V6.58032C19.1024 8.19732 6.41669 21.8937 6.41669 38.5C6.41669 56.1908 20.8093 70.5834 38.5 70.5834C43.2235 70.5772 47.8865 69.5207 52.1515 67.4905C52.1515 67.4905 35.2981 38.8882 35.2949 38.5161C35.2945 38.5106 35.2934 38.5052 35.2917 38.5V38.5Z\"></path> </svg>',
  mountainGraph: '<svg id=\"mountain-graph-icon\" width=\"109\" height=\"109\" viewBox=\"0 0 109 109\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M109 10.9V98.1H1.74382C0.0107156 98.1 -0.523384 96.961 0.566616 95.5658L24.9227 64.2392C25.1668 63.9118 25.4781 63.6404 25.8357 63.4431C26.1933 63.2457 26.5889 63.1271 26.9961 63.0951C27.4032 63.0631 27.8125 63.1185 28.1965 63.2575C28.5805 63.3966 28.9304 63.616 29.2227 63.9013L36.9563 71.1716C37.2351 71.4547 37.5756 71.6696 37.9513 71.7993C38.3269 71.9291 38.7274 71.9703 39.1216 71.9196C39.5158 71.869 39.8929 71.7279 40.2235 71.5073C40.5541 71.2868 40.8292 70.9928 41.0274 70.6484L57.6336 44.8154C57.8302 44.4729 58.104 44.1809 58.4332 43.9628C58.7624 43.7446 59.1379 43.6062 59.5299 43.5586C59.922 43.511 60.3197 43.5555 60.6916 43.6885C61.0634 43.8215 61.3991 44.0394 61.672 44.3249L73.504 55.7481C74.7684 56.9743 76.5505 56.7291 77.4498 55.2031L105.425 12.7748C106.329 11.2379 107.637 10.9 109 10.9Z\"></path> </svg>',
  pieChart3: '<svg id=\"pie-chart3-icon\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M54.193 12.87C53.462 12.87 52.868 13.464 52.868 14.196C52.868 14.264 52.897 14.323 52.907 14.389H52.868V45.827C52.868 46.559 53.462 47.153 54.193 47.153H85.63V47.114C85.696 47.124 85.755 47.153 85.824 47.153C86.555 47.153 87.149 46.559 87.149 45.827C86.961 27.707 72.313 13.059 54.193 12.87V12.87Z\"></path> <path d=\"M79.485 53.46C79.485 52.728 78.892 52.134 78.16 52.134H49.261C48.9095 52.1337 48.5725 51.9939 48.324 51.7452C48.0756 51.4966 47.936 51.1595 47.936 50.808V22.015H47.897C47.907 21.949 47.936 21.89 47.936 21.822C47.936 21.089 47.342 20.496 46.61 20.496C46.578 20.496 46.552 20.512 46.521 20.514V20.505C46.403 20.504 46.286 20.496 46.168 20.496C27.768 20.496 12.851 35.413 12.851 53.813C12.851 72.213 27.768 87.13 46.168 87.13C64.568 87.13 79.485 72.213 79.485 53.813C79.485 53.707 79.48 53.602 79.478 53.495C79.478 53.482 79.485 53.472 79.485 53.46Z\"></path> </svg>',
  lineGraph: '<svg id=\"line-graph-icon\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M85.088 80.271C87.803 80.271 90 78.071 90 75.354V24.645C90.0007 23.9996 89.8741 23.3603 89.6275 22.7638C89.381 22.1672 89.0193 21.6251 88.5631 21.1685C88.1069 20.7118 87.5652 20.3496 86.9689 20.1024C86.3726 19.8552 85.7335 19.728 85.088 19.728H14.912C14.2666 19.7282 13.6275 19.8555 13.0313 20.1027C12.435 20.3499 11.8934 20.7122 11.4372 21.1688C10.9811 21.6254 10.6193 22.1674 10.3727 22.7639C10.1261 23.3604 9.99948 23.9996 10 24.645V75.354C9.99935 75.9995 10.1259 76.6388 10.3725 77.2353C10.619 77.8318 10.9807 78.3739 11.4369 78.8306C11.8931 79.2872 12.4348 79.6495 13.0311 79.8966C13.6274 80.1438 14.2665 80.271 14.912 80.271H85.088ZM80.175 70.443H19.825V29.556H80.175V70.443Z\"></path> <path d=\"M41.564 65.897C40.637 65.897 39.745 65.527 39.083 64.868L34.187 59.971L28.227 64.903C27.8721 65.1973 27.4626 65.4187 27.022 65.5546C26.5814 65.6904 26.1184 65.7381 25.6594 65.6948C25.2004 65.6515 24.7544 65.5181 24.347 65.3023C23.9395 65.0865 23.5787 64.7924 23.285 64.437C22.692 63.7198 22.408 62.7965 22.4954 61.8701C22.5828 60.9436 23.0344 60.0897 23.751 59.496L32.175 52.527C32.8478 51.9691 33.7047 51.6827 34.5777 51.724C35.4507 51.7653 36.2768 52.1312 36.894 52.75L40.966 56.825L49.945 42.836C50.2812 42.3067 50.7545 41.8783 51.3145 41.5962C51.8746 41.3142 52.5005 41.189 53.126 41.234C54.398 41.316 55.526 42.08 56.071 43.236L61.37 54.442L71.602 36.45C72.0634 35.6419 72.8261 35.0494 73.7233 34.8024C74.6205 34.5554 75.579 34.6739 76.389 35.132C77.1976 35.5937 77.7902 36.3572 78.0367 37.2552C78.2832 38.1531 78.1636 39.1122 77.704 39.922L64.133 63.784C63.8127 64.3398 63.3473 64.798 62.7866 65.1096C62.226 65.4212 61.5911 65.5745 60.95 65.553C60.3075 65.5301 59.6838 65.3305 59.1474 64.9763C58.6109 64.6221 58.1824 64.1268 57.909 63.545L52.43 51.954L44.516 64.28C44.1987 64.7751 43.7621 65.1827 43.2463 65.4652C42.7306 65.7477 42.1521 65.8962 41.564 65.897Z\"></path> </svg>',
  connectedPlotGraph: '<svg id=\"connected-plot-graph-icon\" width=\"81\" height=\"81\" viewBox=\"0 0 81 81\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.125 64.125H70.875V70.875H10.125V64.125ZM20.25 54C23.9625 54 27 50.9625 27 47.25C27 45.5625 26.325 43.875 25.3125 42.8625L29.7 33.75H30.375C32.0625 33.75 33.75 33.075 34.7625 32.0625L43.875 36.7875V37.125C43.875 40.8375 46.9125 43.875 50.625 43.875C54.3375 43.875 57.375 40.8375 57.375 37.125C57.375 35.4375 56.7 34.0875 55.6875 32.7375L60.075 23.625H60.75C64.4625 23.625 67.5 20.5875 67.5 16.875C67.5 13.1625 64.4625 10.125 60.75 10.125C57.0375 10.125 54 13.1625 54 16.875C54 18.5625 54.675 20.25 55.6875 21.2625L51.3 30.375H50.625C48.9375 30.375 47.25 31.05 46.2375 32.0625L37.125 27.675V27C37.125 23.2875 34.0875 20.25 30.375 20.25C26.6625 20.25 23.625 23.2875 23.625 27C23.625 28.6875 24.3 30.375 25.3125 31.3875L20.925 40.5H20.25C16.5375 40.5 13.5 43.5375 13.5 47.25C13.5 50.9625 16.5375 54 20.25 54Z\"></path> </svg>',
  info: '<svg class=\"info-tip\" width=\"20\" height=\"22\" viewBox=\"0 0 20 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <path id=\"info-tip-i\" d=\"M8.69921 5.8589C8.69921 5.45609 8.83504 5.11886 9.1067 4.84719C9.37837 4.57553 9.71092 4.4397 10.1044 4.4397C10.4978 4.4397 10.8304 4.57553 11.102 4.84719C11.3737 5.11886 11.5095 5.45609 11.5095 5.8589C11.5095 6.25234 11.3737 6.58489 11.102 6.85655C10.8304 7.12822 10.4978 7.26405 10.1044 7.26405C9.71092 7.26405 9.37837 7.12822 9.1067 6.85655C8.83504 6.58489 8.69921 6.25234 8.69921 5.8589ZM11.3128 7.7418V15.5825H8.90998V7.7418H11.3128Z\" fill=\"currentColor\"/> <path id=\"info-tip-Ellipse-1\" d=\"M18.6787 10.423C18.6787 14.9694 14.8726 18.718 10.0989 18.718C5.32514 18.718 1.51909 14.9694 1.51909 10.423C1.51909 5.87651 5.32514 2.12797 10.0989 2.12797C14.8726 2.12797 18.6787 5.87651 18.6787 10.423Z\" stroke=\"currentColor\" stroke-width=\"2.52927\"/> </g> </svg>'
};

// how to add custom input
// (source option number): {
//   icon: "default", [[tally box identifier (like the form id for email forms), svg icon string or allIcons.icon], ...],
//   title: "default", [[tally box identifier (like the form id for email forms), string], ...],
//   moreInfo: "default", [[tally box identifier (like the form id for email forms), string], ...],
//   toolTip: "default", [[tally box identifier (like the form id for email forms), string], ...],
//   count: "default", [[tally box identifier (like the form id for email forms), number or string], ...],
//   countSubText: "default", [[tally box identifier (like the form id for email forms), string], ...],
//   movement: "default", [[tally box identifier (like the form id for email forms), "up" or "down" or null], ...],
// }

const customInput = {
  "9": {
    icon: [[5305, allIcons.radarGraph], [5375, allIcons.pieChart3]]
  }
};
const tlyBxs = [];

// tally box set up
// is there a dataset?
function isThereData(typeNum) {
  typeNum = typeNum.toString();
  return Object.values(parent.g_ClientDataSetInfo).map(x => x.split('|')[0]).some(x => x === typeNum);
}

// return dataset if there is one
function getTheDataSetIdFromSourceOption(typeNum) {
  if (typeof typeNum !== "string") { typeNum = typeNum.toString(); }
  const theDataIsThere = isThereData(typeNum);
  if (theDataIsThere) {
    const typeIndex = Object.values(parent.g_ClientDataSetInfo).map(x => x.split('|')[0]).findIndex(x => x === typeNum);
    return Object.keys(parent.g_ClientDataSetInfo)[typeIndex];
  } else { throw Error('No data'); }
}

// get report month
function getReportMonth() {
  return parent.g_Report.refstartdt.split(' ')[0]
}

function ifNotCustomInputUseDefault(tlyBxOpt, defaultOption, identifier) {
  return tlyBxOpt && tlyBxOpt !== 'default' && tlyBxOpt.some((item) => item[0] === identifier) ? tlyBxOpt.filter((item) => item[0] === identifier)[0][1] : defaultOption;
}

function prepData(typeNum, customInput) {
  typeNum = typeNum.toString();
  let tlyBxData = {};
  setTlyBxDataToDefault();

  // prep email form data
  if (typeNum === "9") {
    // get all forms for current month
    const data = parent['DataSet_' + tlyBxData.dataSet + '_Rows'];
    const curMonthDate = getReportMonth();
    const thisMonth = data.filter(x => x[0] === curMonthDate);
    const lastMonthDate = data[data.length - (thisMonth.length + 1)][0];
    const lastMonth = data.filter(x => x[0] === lastMonthDate);
    if (thisMonth.length >= lastMonth.length) {
      startWithThisMonth('normal');
    } else {
      startWithThisMonth('reversed');
    }
    function startWithThisMonth(normalOrReversed) {
      const startMonth = normalOrReversed === 'normal' ? thisMonth : lastMonth;
      const otherMonth = normalOrReversed === 'normal' ? lastMonth : thisMonth;
      startMonth.forEach((x, i) => {
        const otherMonthCount = otherMonth[i] ? otherMonth[i][3] : '0';

        // set count
        if (tlyBxData.count === 'default') {
          tlyBxData.count = normalOrReversed === 'normal' ? x[3] : otherMonthCount;
        } else {
          tlyBxData.count = ifNotCustomInputUseDefault(tlyBxData.count, 'err', x[2]);
        }

        // set count subtext
        tlyBxData.countSubText = ifNotCustomInputUseDefault(tlyBxData.countSubText, 'recieved', x[2]);

        // set icon
        tlyBxData.icon = ifNotCustomInputUseDefault(tlyBxData.icon, allIcons.calendar, x[2]);

        // set title
        tlyBxData.title = ifNotCustomInputUseDefault(tlyBxData.title, x[1], x[2]);

        // set toolTip
        tlyBxData.toolTip = ifNotCustomInputUseDefault(tlyBxData.toolTip, 'Total form submissions was ' + tlyBxData.count + '. click for more info.', x[2]);

        // set moreinfo 
        tlyBxData.moreInfo = ifNotCustomInputUseDefault(tlyBxData.moreInfo, 'Reports indicate we received ' + tlyBxData.count + ' form submissions of the \"' + tlyBxData.title + '\" form originating from your site durning the last month.', x[2]);

        // set movement
        let movement = 'default';
        if (normalOrReversed === 'normal' && x[3] !== otherMonthCount) { movement = x[3] > otherMonthCount ? 'up' : 'down'; };
        if (normalOrReversed === 'reversed' && x[3] !== otherMonthCount) { movement = x[3] < otherMonthCount ? 'up' : 'down'; };
        tlyBxData.movement = ifNotCustomInputUseDefault(tlyBxData.movement, movement, x[2]);


        // send back data for tally box build
        tlyBxs.push({
          typeNum: tlyBxData.typeNum,
          dataSet: tlyBxData.dataSet,
          icon: tlyBxData.icon,
          title: tlyBxData.title,
          moreInfo: tlyBxData.moreInfo,
          toolTip: tlyBxData.toolTip,
          count: tlyBxData.count,
          countSubText: tlyBxData.countSubText,
          movement: tlyBxData.movement
        });

        // reset tlyBxData
        setTlyBxDataToDefault();
      });
    }
  }

  // prep secure form data
  if (typeNum === "3") {
    setTlyBxDataToDefault()
    const data = parent['DataSet_' + tlyBxData.dataSet + '_Rows'];
    const thisMonth = getReportMonth();
    let thisMonthIndex = 0;
    data.map((y, i) => y[0] === thisMonth ? thisMonthIndex = i : null);
    const lastMonthCount = data[thisMonthIndex - 1][1];
    const count = data.filter((x) => x[0] === thisMonth)[0][1];
    let movement = 'default';
    if (count !== lastMonthCount) {
      movement = count > lastMonthCount ? 'up' : 'down'; 
    }

    // set count to total
    tlyBxData.count = ifNotCustomInputUseDefault(tlyBxData.count, count);

    // set count subtext
    tlyBxData.countSubText = ifNotCustomInputUseDefault(tlyBxData.countSubText, 'recieved');

    // set icon
    tlyBxData.icon = ifNotCustomInputUseDefault(tlyBxData.icon, allIcons.calendar);

    // set title
    tlyBxData.title = ifNotCustomInputUseDefault(tlyBxData.title, 'Secure Form Submissions');

    // set toolTip
    tlyBxData.toolTip = ifNotCustomInputUseDefault(tlyBxData.toolTip, 'Total form submissions was ' + tlyBxData.count + '. click for more info.');

    // set moreinfo
    tlyBxData.moreInfo = ifNotCustomInputUseDefault(tlyBxData.moreInfo, 'Reports indicate we received ' + tlyBxData.count + ' total form submissions from all secure forms for this month.');

    // set movement
    tlyBxData.movement = ifNotCustomInputUseDefault(tlyBxData.movement, movement);

    // send to tlyBxs
    tlyBxs.push({
      typeNum: tlyBxData.typeNum,
      dataSet: tlyBxData.dataSet,
      icon: tlyBxData.icon,
      title: tlyBxData.title,
      moreInfo: tlyBxData.moreInfo,
      toolTip: tlyBxData.toolTip,
      count: tlyBxData.count,
      countSubText: tlyBxData.countSubText,
      movement: tlyBxData.movement
    });

    // reset tlyBxData
    setTlyBxDataToDefault();
  }

  // prep BirdEye data for tally box
  if (typeNum === "7") {
    // **** birdeye graphs ****
    // tally box for birdeye review invites or requests sent out.
    // if tally box goes under ___ then red
    // graph of birdeye reviews recieved in past 6 months and from where.
    // whether or not facebook and google are connected. note section.
    // are there going to be multiple boxes?
    // set count
    // set count subtext
    // set icon
    // set title
    // set toolTip
    // set moreinfo
    // set movement

    // reset tlyBxData
    setTlyBxDataToDefault();
  }

  // prep Callfire data for tally box
  if (typeNum === "4") {
    // are there going to be multiple boxes?
    // set count
    // set count subtext
    // set icon
    // set title
    // set toolTip
    // set moreinfo
    // set movement
    
    // reset tlyBxData
    setTlyBxDataToDefault();
  }

  // prep Google AdWords data for tally box
  if (typeNum === "8") {
    // are there going to be multiple boxes?
    // set count
    // set count subtext
    // set icon
    // set title
    // set toolTip
    // set moreinfo
    // set movement
    
    // reset tlyBxData
    setTlyBxDataToDefault();
  }

  // prep Google Analytics data for tally box
  if (typeNum === "2") {
    // are there going to be multiple boxes?
    // set count
    // set count subtext
    // set icon
    // set title
    // set toolTip
    // set moreinfo
    // set movement
    
    // reset tlyBxData
    setTlyBxDataToDefault();
  }

  // prep Healthgrades data for tally box
  if (typeNum === "5") {
    // are there going to be multiple boxes?
    // set count
    // set count subtext
    // set icon
    // set title
    // set toolTip
    // set moreinfo
    // set movement
    
    // reset tlyBxData
    setTlyBxDataToDefault();
  }

  // prep Healthgrades data for tally box
  if (typeNum === "facebook") {
    
    // I think the main things I'd want to report on are how many likes, comments, and shares, are on a post, how many people have seen each post (reach), how many page likes or followers they have, profile visits, and then a place to fill out any comments. Also for Facebook ad clients, there's quite a few different metrics to pull from, like link clicks, reach, frequency, cost per click, engagement, video view length, etc.
    
    // Facebook pages, Instagram, and Facebook ads all have different dashboards to look at these metrics.For Facebook ad reports, it's all in one place, but I have to create the report by hand to make it easier for clients to read and understand. I haven't done much reporting for social media clients.
    
    // At the very least, I'd want reporting for Facebook ads and Premium Social Media clients, but eventually, it would be good to put Enhanced Social Media clients on reports as well. Right now that would be somewhere between 20-25 clients total, I think?

    // are there going to be multiple boxes?
    // set count
    // set count subtext
    // set icon
    // set title
    // set toolTip
    // set moreinfo
    // set movement

    // reset tlyBxData
    setTlyBxDataToDefault();
  }
  

  function setTlyBxDataToDefault() {
    tlyBxData.typeNum = typeNum;
    tlyBxData.dataSet = isThereData(typeNum) ? getTheDataSetIdFromSourceOption(typeNum) : null;
    tlyBxData.icon = customInput && customInput[typeNum] && customInput[typeNum].icon ? customInput[typeNum].icon : 'default';
    tlyBxData.title = customInput && customInput[typeNum] && customInput[typeNum].title ? customInput[typeNum].title : 'default';
    tlyBxData.moreInfo = customInput && customInput[typeNum] && customInput[typeNum].moreInfo ? customInput[typeNum].moreInfo : 'default';
    tlyBxData.toolTip = customInput && customInput[typeNum] && customInput[typeNum].toolTip ? customInput[typeNum].toolTip : 'default';
    tlyBxData.count = customInput && customInput[typeNum] && customInput[typeNum].count ? customInput[typeNum].count : 'default';
    tlyBxData.countSubText = customInput && customInput[typeNum] && customInput[typeNum].countSubText ? customInput[typeNum].countSubText : 'default';
    tlyBxData.movement = customInput && customInput[typeNum] && customInput[typeNum].movement ? customInput[typeNum].movement : 'default';
  }
}

function buildTallyBox(tlyBx) {
  const btn = document.createElement('button');
  btn.id = 'tally-' + tlyBx.dataSet;
  btn.dataset.toggle = 'modal';
  btn.dataset.target = '#moreInfoModal';
  btn.dataset.moreInfo = tlyBx.moreInfo;
  btn.classList = 'tally-box';
  btn.innerHTML = '<div class=\"tally-main\" ' + (() => {
    if (tlyBx.movement === 'up') { return "data-movement=\"up\""; }
    if (tlyBx.movement === 'down') { return "data-movement=\"down\""; }
    if (tlyBx.movement === 'default') { return "data-movement=\"default\""; }
  })() + '> <div class=\"tally-type\">' + tlyBx.title + '</div> <div class=\"tally-icon\"> ' + tlyBx.icon + ' </div> <div class=\"tally-count\" style=\"content: \'' + tlyBx.countSubText + '\';\">' + tlyBx.count + '</div> </div> <div class=\"tally-sub\"> <div class=\"tally-movement\"> </div> <div class=\"tally-info tooltip-left\" data-tooltip=\"' + tlyBx.toolTip + '\"> ' + allIcons.info + ' </div> </div>';

  // append new tally box
  document.querySelector('.tally-boxes').appendChild(btn);
}

// build tally box container at top of report if it isn't there already
if (!document.querySelector('.tally-boxes')) {
  const row = document.createElement('div');
  const col = document.createElement('div');
  const firstRow = document.body.querySelector('.container-fluid .row');
  col.classList = 'col-lg tally-boxes'
  row.classList = 'row';
  row.appendChild(col);
  document.body.querySelector('.container-fluid').insertBefore(row, firstRow);
}

// get source options for report and prep data
Object.values(parent.g_ClientDataSetInfo).map((val) => val.split('|')[0]).forEach((source) => { prepData(source, customInput) });

// loop through tlyBxs and build a tally box forEach tlyBx
tlyBxs.forEach((tlyBx) => {
  buildTallyBox(tlyBx);
});

//************* end tally boxes *************


// remove titles
document.querySelectorAll('#remove-title').forEach(x => { x.parentElement.querySelector('.section_title > br').remove(); });


// ***************************
// run after content is loaded
// ***************************
document.addEventListener('DOMContentLoaded', (e) => {
  (() => {
    // add bootstrap js for modals
    const s = document.createElement('script');
    s.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';
    document.body.appendChild(s);

    // tallyboxes listen for click and dynamically change the modal body content
    document.querySelectorAll('[data-toggle=modal]').forEach((x) => x.addEventListener('click', (e) => { addToMoreInfo(e); }));

    // trigger focus on modal shown for accessibility
    $('#moreInfoModal').on('shown.bs.modal', function () {
      $('#moreInfoModal').trigger('focus');
    });

    // remove the modal body content on hidden
    $('#moreInfoModal').on('hidden.bs.modal', function () {
      $('#moreInfoModal .modal-body p').remove();
    });

    // add tally box more info to modal body content
    function addToMoreInfo(e) {
      const p = document.createElement('p');
      const info = e.target.closest('[data-more-info]').dataset.moreInfo;
      p.innerText = info;
      document.querySelector('#moreInfoModal .modal-body').appendChild(p)
    }
  })();
});})();
