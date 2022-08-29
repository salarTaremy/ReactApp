


const Options = () => {
    const Stimulsoft = window.Stimulsoft || {};
    const Options = new Stimulsoft.Viewer.StiViewerOptions();
    
    //Options.width = "1000px";
    //Options.height = "1000px";
    
    //appearance
    Options.appearance.reportDisplayMode = Stimulsoft.Report.Export.StiHtmlExportMode.Div;
    Options.appearance.scrollbarsMode = true;
    Options.appearance.showTooltips = false;
    Options.appearance.fullScreenMode = true;
    Options.appearance.pageAlignment = Stimulsoft.Viewer.StiContentAlignment.right
    //Options.appearance.scrollbarsMode = false;
    //Options.appearance.backgroundColor = "#ffffff";
    //Options.appearance.pageBorderColor = Stimulsoft.System.Drawing.Color.transparent;
    //Options.appearance.rightToLeft = false;
    
    //toolbar
    Options.toolbar.visible = true
    Options.toolbar.fontFamily = "IRANSansWeb"
    Options.toolbar.showAboutButton = false;
    Options.toolbar.showDesignButton = true;
    Options.toolbar.alignment = Stimulsoft.Viewer.StiContentAlignment.Center;
    Options.toolbar.showButtonCaptions = true
    Options.toolbar.viewMode = Stimulsoft.Viewer.StiWebViewMode.Continuous
    // Options.toolbar.showPrintButton = false;
    // Options.toolbar.backgroundColor = Stimulsoft.System.Drawing.Color.transparent;
    // Options.toolbar.borderColor = Stimulsoft.System.Drawing.Color.black;
    // Options.toolbar.fontColor = Stimulsoft.System.Drawing.Color.pink;
      }
      export default Options