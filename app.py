import android.os.Bundle;
import android.widget.Toast;
import android.app.Activity;

public class MainActivity extends Activity {

@Override
protected void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);

// Panel UI Load ho raha hai...
Toast.makeText(this, "Welcome Raja Ahad! Aimbot Panel Activated 🎯", Toast.LENGTH_LONG).show();

// Yahan AimBot ka asli masala chalega
enableAimBotHeadshot();
}

public void enableAimBotHeadshot() {
boolean isAimBotActive = true;

if (isAimBotActive) {
// Yeh function game ke memory me ghus ke headshot chipka dega
System.out.println("Booooom! Direct Headshot! 💀🔥");
} else {
System.out.println("Miss ho gaya bhai!");
}
}
}
```

