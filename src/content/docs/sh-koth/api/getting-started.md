---
title: "For developers: SH-Koth API"
---
SH-Koth provides a powerful API that allows developers to interact with its core functionalities
and extend it with custom features. The API is designed to be intuitive and easy to use, 
making it accessible for developers of all skill levels.

# Getting started
To get started with the SH-Koth API, you need to include the SH-Koth plugin.
I highly recommend using Gradle kts. Here's an example of how to set it up:

### [[Releases page]](https://jitpack.io/#Smarts-Hub/SH-Koth/)
The releases page contains all the available versions of SH-Koth. 
You can find the latest version published there, and the way to implement it in your project 
with gradle or maven.

```kotlin title="build.gradle.kts"
repositories {
    mavenCentral()
    maven { url = uri("https://jitpack.io") }
}

// Tag is the version obtained from the releases page
dependencies {
    implementation("com.github.Smarts-Hub:SH-Koth:Tag")
    // Example:
    // implementation("com.github.Smarts-Hub:SH-Koth:1.3.0")
}
```

# Using the API
Once you have included the SH-Koth plugin in your project, you can start using the API
to interact with its features.

Here are some examples of what you can do with the API.
Take into account that the examples are in a JavaPlugin class, but you can use it in any class,
and are specially basic.

You can implement ur own logic for tally ("capture type"), listen and 
cancel events, create ur own koth class, etc.

```java title="ExampleAddon.java"
import dev.smartshub.shkoth.api.KothAPIProvider;
import dev.smartshub.shkoth.api.koth.Koth;
import org.bukkit.plugin.java.JavaPlugin;

import java.util.Collection;

public class SHKothAddon extends JavaPlugin {

    @Override
    public void onEnable() {

        // Some code...

        hookExamples();

    }

    private void hookExamples() {

        if(!KothAPIProvider.isAvailable()) return;

        var kothAPI = KothAPIProvider.getInstance();

        Collection<Koth> existingKoths = kothAPI.getAllKoths();
        Collection<Koth> runningKoths = kothAPI.getRunningKoths();

        // The id of a koth is a String, the name of the .yml file without the extension.
        // For example, if the file is "my_koth.yml", the id is "my_koth".
        String exampleKothId = "my_koth";

        // If you know the id of a koth, you can get it like this:
        Koth exampleKoth = kothAPI.getKoth(exampleKothId); // return the Koth interface

        // Operations with koth-id:
        kothAPI.unregisterKoth(exampleKothId);
        kothAPI.startKoth(exampleKothId); // formerly is force start
        kothAPI.stopKoth(exampleKothId); // formerly is force stop

        // To register a new koth, you need to bring that method a class using the Koth interface.
        // I recommend u to check the implementation of Koth in the "plugin" module and use
        // the existing AbstractKoth class from to extend your own Koth class.
        // After that, you can register your koth like this:
        MyKothClass myKothInstance = new MyKothClass(...);
        kothAPI.registerKoth(myKothInstance);
    }

}
```