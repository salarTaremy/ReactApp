


const Stimulsoft = window.Stimulsoft || {};
const options = new Stimulsoft.Viewer.StiViewerOptions();

//options.width = "1000px";
//options.height = "1000px";

//appearance
options.appearance.reportDisplayMode = Stimulsoft.Report.Export.StiHtmlExportMode.Div;
options.appearance.scrollbarsMode = true;
options.appearance.showTooltips = false;
options.appearance.fullScreenMode = true;
options.appearance.pageAlignment = Stimulsoft.Viewer.StiContentAlignment.right
//options.appearance.scrollbarsMode = false;
//options.appearance.backgroundColor = "#ffffff";
//options.appearance.pageBorderColor = Stimulsoft.System.Drawing.Color.transparent;
//options.appearance.rightToLeft = false;

//toolbar
options.toolbar.visible = true
options.toolbar.fontFamily = "IRANSansWeb"
options.toolbar.showAboutButton = false;
options.toolbar.showDesignButton = true;
options.toolbar.alignment = Stimulsoft.Viewer.StiContentAlignment.Center;
options.toolbar.showButtonCaptions = true
options.toolbar.viewMode = Stimulsoft.Viewer.StiWebViewMode.Continuous
// options.toolbar.showPrintButton = false;
// options.toolbar.backgroundColor = Stimulsoft.System.Drawing.Color.transparent;
// options.toolbar.borderColor = Stimulsoft.System.Drawing.Color.black;
// options.toolbar.fontColor = Stimulsoft.System.Drawing.Color.pink;

export default options