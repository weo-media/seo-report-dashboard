g_DataSourceOptions
7 === BirdEye
4 === Callfire
9 === Email Forms Submissions
8 === Google AdWords
2 === Google Analytics
5 === Healthgrades
3 === Secure Form Submissions

DataSet_104_Cols

DataSet_104_Rows

??? === g_ClientDataSetOpts

colors
#4290CF,#1D6BB0,#8BD866,#59A95E,#BE5DE8,#9A2ECB,#F3CE6A,#F3B92B,#ED7057,#D94E30


// is there a dataset?
function isThereData(typeNum) {
  typeNum = typeNum.toString();
  return Object.values(parent.g_ClientDataSetInfo).map(x=>x.split('|')[0]).some(x=>x===typeNum);
}

// return dataset if there is one
function getTheDataSetTypeId(typeNum) {
  if (typeof typeNum !== "string") {typeNum = typeNum.toString();}
  var theDataIsThere = isThereData(typeNum);
if (isThereData(typeNum)) {
  var typeIndex = Object.values(parent.g_ClientDataSetInfo).map(x=>x.split('|')[0]).findIndex(x=>x===typeNum);
  return Object.keys(parent.g_ClientDataSetInfo)[typeIndex];
}}

// build email form tally boxes
function buildEmailFormTallyBoxes() {
  var DataSetId = getTheDataSetTypeId(9);
  var data = parent['DataSet_' + DataSetId + '_Rows'];

  // get all forms for current month
  var curMonthDate = data[data.length - 1][0];
  var thisMonth = data.filter(x=>x[0] === curMonthDate);
  var lastMonthDate = data[data.length - (thisMonth.length + 1)][0];
  var lastMonth = data.filter(x=>x[0] === lastMonthDate);
  if (thisMonth.length >= lastMonth.length) {
    startWithThisMonth();
  } else {
    startWithLastMonth();
  }

  function startWithThisMonth() {
    thisMonth.forEach((x,i) => {
      var lastMonthCount = lastMonth[i] ? lastMonth[i][3] : "0";
      var btn = document.createElement('button');
      btn.id = 'tallyEmailForm-' + x[2];
      btn.dataset.toggle = 'modal';
      btn.dataset.target = '#moreInfoModal';
      btn.classList = 'tally-box';
      btn.dataset.moreInfo = 'Reports indicate we received '+x[3]+' form submissions of the &quot;'+x[1]+'&quot; form originating from your site durning the last month.'

      btn.innerHTML = '<div class=\"tally-main\" style=\"background: '+(()=>{
        if (x[3] > lastMonthCount) {return "linear-gradient(90deg, #70B44E 0%, #89DB60 73.27%)";}
        if (x[3] < lastMonthCount) {return "linear-gradient(90deg, #D94F31 0%, #F07154 73.27%)";}
        if (x[3] === lastMonthCount) {return "linear-gradient(90deg, #1D6BB0 0%, #4092D6 72.99%)";}
      })()+';\"> <div class=\"tally-type\">'+x[1]+'</div> <div class=\"tally-icon\"> <svg class=\"tally-calendar\" style=\"display:none;\" width=\"52\" height=\"49\" viewBox=\"0 0 52 49\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <g id=\"tallyCalendar-Group\"> <path id=\"tallyCalendar-Vector\" d=\"M9.24817 26.5736L12.0693 29.3947\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_2\" d=\"M12.0693 26.5736L9.24817 29.3947\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> </g> <g id=\"tallyCalendar-Group_2\"> <path id=\"tallyCalendar-Vector_3\" d=\"M19.3235 26.5736L22.0103 29.3947\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_4\" d=\"M22.0103 26.5736L19.3235 29.3947\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> </g> <g id=\"tallyCalendar-Group_3\"> <path id=\"tallyCalendar-Vector_5\" d=\"M29.2646 26.5736L32.0857 29.3947\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_6\" d=\"M32.0857 26.5736L29.2646 29.3947\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> </g> <path id=\"tallyCalendar-Vector_7\" d=\"M46.7285 5.88574H50.3557V47.3963H1.45654V5.88574H7.6361\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_8\" d=\"M15.5621 1.45239H9.24817V10.1844H15.5621V1.45239Z\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_9\" d=\"M42.564 1.45239H36.2501V10.1844H42.564V1.45239Z\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_10\" d=\"M1.45654 15.6922H45.6538\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_11\" d=\"M8.84521 21.7374H12.4723\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_12\" d=\"M18.7864 21.7374H22.5478\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_13\" d=\"M28.8616 21.7374H32.4887\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_14\" d=\"M38.9369 21.7374H42.564\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_15\" d=\"M38.9369 28.3199H42.564\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_16\" d=\"M8.84521 34.9025H12.4723\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_17\" d=\"M18.7864 34.9025H22.5478\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_18\" d=\"M28.8616 34.9025H32.4887\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_19\" d=\"M38.9369 34.9025H42.564\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_20\" d=\"M8.84521 41.4853H12.4723\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_21\" d=\"M18.7864 41.4853H22.5478\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_22\" d=\"M28.8616 41.4853H32.4887\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_23\" d=\"M38.9369 41.4853H42.564\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> <path id=\"tallyCalendar-Vector_24\" d=\"M19.7264 5.88574H36.25\" stroke=\"white\" stroke-width=\"1.96721\" stroke-miterlimit=\"10\" stroke-linecap=\"square\"/> </g> </svg> </div> <div class=\"tally-count\">'+x[3]+'</div> </div> <div class=\"tally-sub\"> <div class=\"tally-movement\"> </div> <div class=\"tally-info tooltip-left\" data-tooltip=\"Total form submissions was '+x[3]+'. click for more info.\"> <svg class=\"info-tip\" width=\"20\" height=\"22\" viewBox=\"0 0 20 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g > <path id=\"info-tip-i\" d=\"M8.69921 5.8589C8.69921 5.45609 8.83504 5.11886 9.1067 4.84719C9.37837 4.57553 9.71092 4.4397 10.1044 4.4397C10.4978 4.4397 10.8304 4.57553 11.102 4.84719C11.3737 5.11886 11.5095 5.45609 11.5095 5.8589C11.5095 6.25234 11.3737 6.58489 11.102 6.85655C10.8304 7.12822 10.4978 7.26405 10.1044 7.26405C9.71092 7.26405 9.37837 7.12822 9.1067 6.85655C8.83504 6.58489 8.69921 6.25234 8.69921 5.8589ZM11.3128 7.7418V15.5825H8.90998V7.7418H11.3128Z\" fill=\"#949494\"/> <path id=\"info-tip-Ellipse-1\" d=\"M18.6787 10.423C18.6787 14.9694 14.8726 18.718 10.0989 18.718C5.32514 18.718 1.51909 14.9694 1.51909 10.423C1.51909 5.87651 5.32514 2.12797 10.0989 2.12797C14.8726 2.12797 18.6787 5.87651 18.6787 10.423Z\" stroke=\"#949494\" stroke-width=\"2.52927\"/> </g> </svg> </div> </div>';
      document.querySelector('.tally-boxes').appendChild(btn);
    });
  }
}


buildEmailFormTallyBoxes();


// need to dynamically do tally box for each form.
// try based on dates
0: (4) ["2019-04-01", "Website Inquiry", 5305, 1]
1: (4) ["2019-06-01", "", 0, 0]
2: (4) ["2019-07-01", "", 0, 0]
3: (4) ["2019-08-01", "", 0, 0]
4: (4) ["2019-09-01", "", 0, 0]
5: (4) ["2019-10-01", "", 0, 0]
6: (4) ["2019-11-01", "", 0, 0]
7: (4) ["2019-12-01", "", 0, 0]
8: (4) ["2020-01-01", "", 0, 0]
9: (4) ["2020-02-01", "", 0, 0]
10: (4) ["2020-03-01", "", 0, 0]
11: (4) ["2020-04-01", "", 0, 0]
12: (4) ["2020-05-01", "", 0, 0]
13: (4) ["2020-06-01", "Website Inquiry", 5305, 1]
14: (4) ["2020-06-01", "ReqAppt Email for HIPAA", 5375, 3]

parent.g_ClientDataSetInfo
{1103: "9|Email Forms Submissions for c777|2 months of data, 2 forms|320"}




