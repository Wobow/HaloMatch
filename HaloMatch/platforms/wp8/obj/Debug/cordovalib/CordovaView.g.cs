﻿#pragma checksum "c:\Users\wilyr\Documents\Visual Studio 2015\Projects\HaloMatch\HaloMatch\platforms\wp8\cordovalib\CordovaView.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "4A3A0EBCA039BA5A8D6DDA94A843C5A4"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using Microsoft.Phone.Controls;
using System;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Automation.Peers;
using System.Windows.Automation.Provider;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Resources;
using System.Windows.Shapes;
using System.Windows.Threading;


namespace WPCordovaClassLib {
    
    
    public partial class CordovaView : System.Windows.Controls.UserControl {
        
        internal System.Windows.Controls.Grid LayoutRoot;
        
        internal Microsoft.Phone.Controls.WebBrowser CordovaBrowser;
        
        internal System.Windows.Media.Animation.Storyboard FadeIn;
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Windows.Application.LoadComponent(this, new System.Uri("/io.cordova.myappe2785d518e9f4f6ea03055878dd7a400;component/cordovalib/CordovaVie" +
                        "w.xaml", System.UriKind.Relative));
            this.LayoutRoot = ((System.Windows.Controls.Grid)(this.FindName("LayoutRoot")));
            this.CordovaBrowser = ((Microsoft.Phone.Controls.WebBrowser)(this.FindName("CordovaBrowser")));
            this.FadeIn = ((System.Windows.Media.Animation.Storyboard)(this.FindName("FadeIn")));
        }
    }
}

