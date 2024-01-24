# Optimizing Virtual Rendering
Setting Up the Interview Environment
Candidates are permitted to utilize Google or any form of assistance during this assessment.
Ideally, candidates are allocated 1 hour for completion, but they can take as much time as needed.
The code execution can take place in the candidate's development environment or use the provided Live Environment as a starting point (refer to the Live Environment section below).
# Overview
The objective of this exercise is to efficiently render every English word in a single, scrollable list, ensuring optimal performance.

In the App.tsx file, a useDictionary() hook is already implemented. This hook fetches the complete dictionary and returns it as an array. However, with nearly 400K words, directly rendering them all to the DOM at once could potentially crash the web browser. To prevent this, there's a component called <SafelyRenderChildren/> that imposes a limit on the number of children that can be rendered, safeguarding against any risk of crashing during the interview.

# Understanding Virtualization
In client-side development, virtualization involves rendering only essential elements for a seamless user experience while discarding off-screen elements. Rather than rendering all 500K list items, initially, only 500 items are displayed. As the user scrolls, list items are progressively added or removed, aiming to create a seamless user experience.

# Goals
Upon loading the page, a list filled with words should be visible, and the scrollbar should span the entire dictionary length, creating an illusion of every word already present.
Scrolling using the mouse wheel should feel smooth, with elements maintaining correct positions without jumping around as items load/unload.
Dragging the scrollbar to any position should display the correct items.
# Stretch Goals
Implement a search box within the list.
# Parameters
- Each list item has a fixed height of 30px.
<SafelyRenderChildren/> limits the maximum list items to 2,500.
- The number of items rendered at once is at the candidate's discretion, aiming for a balance between performance and usability. Visual evidence of loading should be minimal during both mouse wheel scrolling and large-distance scrolling.
An optional useScrollPosition hook is included for quickly obtaining the current scroll position.