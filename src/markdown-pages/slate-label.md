---
slug: /notes/slate-label
date: 2024-09-15
title: Recreating a GameBoy Advance SP Label
---

> If you are just here for a finished example or download, jump down to the [finished design](#finished-design) and take a look.

## Overview

I recently purchased a "Slate" kit for the GameBoy Advance SP that converts the clam-shell style GameBoy into a flat device. The kit is compatible with many parts that the community already uses, making it easy and affordable to source parts.

One of the compatible parts is the back housing and labels from the GameBoy Advance SP. The issue is that all the labels on the back of the device are installed upside down. This label orientation makes sense for a clam-shell device, where folding it closed makes the labels readable. However, on a device that doesn't fold, these labels appear upside down. Most of the labels can be affixed in a suitable orientation since they’re horizontally symmetrical, but the serial number label can't be rotated due to its shape.

The kit’s creator, Makho, includes reflective gold labels to replace the serial number label. While they look good, they didn’t match the toned-down look I wanted. So, I decided to have a custom label printed to mimic the stock label, but with the orientation flipped (right-side up for my purposes). This way, I could create a label that looks like an authentic GameBoy Advance SP label.

## Existing Solutions

I could find no labels online that were ready made for a "Slate" style GameBoy, so I began looking for labels templates that I could rearrange or remix to be in an upsidedown orientation.

I found that at least one site was selling GameBoy back label templates. These did not look like a reporduction, but instead, just logos and some text thrown on a canvase with the dimentions of a label. I was hoping to find something that looked closer to the stock label.

One of the closest templates I found was from [reddit user /u/dagomez97](https://www.reddit.com/r/Gameboy/comments/j001fg/gameboy_advance_sp_back_sticker_editable/). While I didn't use this label, I did use their back label scan as a reference when I eventually created my own label.

I also used [RetroSix's "GBA SP Back Shell (Sticker Template)"](https://www.retrosix.wiki/gba-sp-back-shell-sticker-template). While their label wasn’t close to the stock look I was aiming for, their cut guide gave me a clear way to define the label’s bounds, which helped with positioning.

My search was relatively frustrating and I decided that I would attempt to recreate a stock back label. I wanted the label to look close enough that I couldn't at a glance tell if it was a real label or not. After the stock label was recreated, I planned on rearranging the individule elements to make an upside version for the Slate. I did see the irony in doing all this work to make the back housing look as mundane as possible.

## Creating a Custom Fake Label

### Barcode Generation

The barcode font seemed to be an open secret, with many on Reddit (including [this post by user /u/glitchdweller](https://www.reddit.com/r/Gameboy/comments/n0idv0/making_a_reproduction_sn_label_for_my_gba_sp_ags/)) identifying "OCR-B" as the font used below the barcode.

As for the barcode itself, it appears to be a "Code39" type, with the encoded information being the same as the text below it. I used [tec-it.com's online barcode generator](https://barcode.tec-it.com/en/Code39?data=XU151485534) for my project, making sure to stretch the generated image using linear scaling to prevent it from becoming fuzzy.

### Font Matching

By far the hardest parts of recreating the label was matching the original fonts. Initially, I thought Fira was a close match, but after creating a whole label with it, I figured I could do better. This led me to explore fonts from similar families, focusing on specific characters that looked incorrect in previous tests. Eventually, I settled on "Myriad Pro". While I’m not 100% sure it’s an exact match, it’s extremely close and would likely fool most people without a reference to compare against.

Here is rough image map of the fonts I landed on for my label:

![Image showing font names and locations on a GameBoy SP back label](./assets/slate-label/image-showing-font-names-and-locations-on-a-gameboy-sp-back-label.png)

### Finished Design

The finished design that I used was this one:

![Final AGS-001 label](./assets/slate-label/final-AGS-001-label.png)

> You can download all variations of this label including ones with a "cut guide" [here](/download/AGS_Labels.zip).

Notice that "undersired" is spelled incorrectly as the original label spells it this way (for both the AGS-001 and AGS-101). Also I matched the serial number (and barcode) and model number from the doner mainboard's original housing for added flare. There are a few things that are still not perfect that I probably could fix, but I felt it looked good enough to stop at this point. I also went with a grey color to emulate the silver look of the original label. Maybe in the future I will see if someone can print this on a silver backed label instead.

### Printing

I had this label printed by [Mathewmods](https://www.etsy.com/shop/Matthewmods) on Etsy.
