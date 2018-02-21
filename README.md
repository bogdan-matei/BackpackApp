# BackpackApp

BackpackApp is meant to be a safe container for your items (just like a backpack). It is divided in 2 containers, usual and sensitive. 

'Usual' -> it is a container in which normal data (reffered as items, items can be anything that the user specified)that resides. By normal, is meant information which is not supposed to be kept hidden, just like public information that you wouldn't mind some people to find about. You could think about it like the exterior of the backpack.

'Sensitive' -> it is a container in which sensitive data (reffered as items) is stored. Data here has extra protective layers, so that only the current user can access it. You could think about it like the interior of a backpack, only the owner should be able to look inside, add items, remove items.

The need for these 2 is that 'usual' will be faster in terms of speed because it won't require extra checks, while 'sensitive' will be slower than 'usual' to ensure that everything is only visible to the user, thus the need to satisfy the need of the 'backpack' owner.

This is just a preview of the app. Usage of it will be added to the README.md as the app is created.
