package com.citrix.lms;
import android.os.Bundle;
import org.apache.cordova.*;

public class LMSAPP extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl("file:///android_asset/www/index.html");
    }
}