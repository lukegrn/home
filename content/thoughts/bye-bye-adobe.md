---
title: Bye bye, Adobe
date: 2024-07-29
params:
    author: Luke Green
---

I canceled my Adobe Photography subscription[^1].

## Some background

As seen in [this section](/alternatives/#misc-programs) of my alternatives[^2],
I have been unhappy with the fact that I couldn't find an alternative to Adobe
Lightroom for RAW development. However, I couldn't find any alternatives that
had all of the features I want as produced similar results.

Lightroom has always been the best solution for digital asset management (photo
tagging, organization, rating, etc) as well as RAW development.

## Why not Adobe?

In general - Adobe has generally predatory business practices[^3], costs a lot
of money[^4], and, of recent, has some serious privacy concerns.

A couple months ago[^5] Adobe released a new Terms of Service, that among other
things entitled them to look at your entire library and use those images as they
see fit[^6]. Among many concerns from others (NDA violations, privacy concerns,
etc), it seemed from the Terms that Adobe could use your content to train their
AI on it. This was the final straw in an already contentious relationship
between myself and Adobe. So, I canceled.

Adobe has since clarified their Terms[^7] to explicitly say that they _do not_
train AI on customer data, but this came after I had canceled. Honestly, this
was the kick I needed to realize I didn't need Adobe anyway.

## Alternatives

As of now, I am pretty comfortably settled using Darktable[^8].

I tried out a few other pieces of software, such as Capture One[^9] and
DxoPhotolab[^10], both of which offered a one time purchase to use the software.
I also really appreciate the short and concise EULA[^11] that Dxo has.

However, if I was going to be ditching one piece of proprietary software for
another, I worried that it would end the same way in a couple more years with an
even larger library of photos to migrate. Darktable is open source, actively
developed, and extremely powerful. It also has one of the worst user interfaces
I've ever experienced[^12], and is overly, unnecessarily complex.

## Transitioning

My switch to Darktable was deeply frustrating, then satisfactory, and finally
extremely exciting. Detailed below are some common Lightroom use cases, how I've
filled them with Darktable, and some gotchas along the way.

### White balance

Due to some complicated engineering reasons, the White Balance[^13] module
defers to the Color Calibration[^14] module by default. Don't touch the White
Balance one, and instead apply in the Color Calibration module. Honestly - I
find my camera usually does a good enough job and I don't have to tweak it much.

### Shadows and Highlights

I almost always make these adjustments in the Tone Equalizer[^15] module. The
Shadows and Highlights[^16] module does a particularly bad job of doing these
adjustments [^17].

It took me a long time to get good results from this module, and it all comes
down to setting the mask correctly. I generally have to pull down the "mask
exposure compensation" slider quite a bit until the highest highlights are at
-0.1 or so.

### Masking

Darktable has wonderful masking tools, that were really frustrating to me at
first. Lightroom's masks have edits applied to them, Darktable has edits applied
to a mask. This is an important distinction - for every module you want to work
on a mask, you have to set it on that module itself instead of applying a bunch
of edits to a created mask.

The key to this not being painful, is to reuse and adjust masks via the Mask
Manager[^18] module.

### Saturation/vibrance

Darktable does a much better job of allowing gradual saturation and vibrance
adjustments via the Color Balance RGB [^19] module. I just wholeheartedly like
this module better than the sliders in Lightroom.

### HSL

HSL in Darktable is something I am still figuring out, but I primarily use the
Color Equalizer module to do HSL adjustments. It works on a curve, as opposed to
Lightroom's sliders, but it accomplishes the same general goal.

## Darktable for the foreseeable future

After about a month and a half of use, I am happy enough with Darktable[^20] to
continue to use it for the foreseeable future. I have ported my library of over
a thousand photos to it, and have reedited them all. Here a couple sample photos
that were edited with Darktable. More are on my Flickr[^21]

![Botanical Gardens](https://live.staticflickr.com/65535/53805205992_16d2326d05_k.jpg)

![Grand Canyon of the Yellowstone](https://live.staticflickr.com/65535/53851552797_902167524b_c.jpg)

![Bison Family](https://live.staticflickr.com/65535/53855316753_2ae8421f9a_h.jpg)

![Last Fish Before the Sun Goes Down and the Rain Comes In](https://live.staticflickr.com/65535/53876830141_a617ca377e_h.jpg)

[^1]: If I had more subscriptions of theirs, I would've canceled them too.
[^2]:
    If it hasn't been updated yet to reflect the outcome described in this
    article

[^3]:
    So bad, in fact, that
    [they were sued by the United States government](https://www.theverge.com/2024/6/17/24180196/adobe-us-ftc-doj-sues-subscriptions-cancel)

[^4]: My yearly subscription was over $120 dollars I believe
[^5]: It has taken me over a month and a half to start and finish this post
[^6]:
    https://petapixel.com/2024/06/06/photographers-outraged-by-adobes-new-privacy-and-content-terms/

[^7]:
    https://blog.adobe.com/en/publish/2024/06/06/clarification-adobe-terms-of-use

[^8]: https://www.darktable.org/
[^9]: https://www.captureone.com/en
[^10]: https://www.dxo.com/dxo-photolab/
[^11]: https://www.dxo.com/eula/
[^12]: In classic Designed By Developers fashion
[^13]:
    https://docs.darktable.org/usermanual/4.6/en/module-reference/processing-modules/white-balance/

[^14]:
    https://docs.darktable.org/usermanual/4.6/en/module-reference/processing-modules/color-calibration/

[^15]:
    https://docs.darktable.org/usermanual/4.6/en/module-reference/processing-modules/tone-equalizer/

[^16]:
    https://docs.darktable.org/usermanual/4.6/en/module-reference/processing-modules/shadows-and-highlights/

[^17]:
    It is mentioned in the Shadows and Highlights documentation that Tone
    Equalizer is the preferred module for these adjustments. Why they wouldn't
    make it clearer that this module is deprecated (or allow it to be removed
    completely) I don't understand.

[^18]:
    https://docs.darktable.org/usermanual/4.6/en/module-reference/utility-modules/darkroom/mask-manager/

[^19]:
    https://docs.darktable.org/usermanual/4.6/en/module-reference/processing-modules/color-balance-rgb/

[^20]: Especially in cost and privacy
[^21]: https://www.flickr.com/photos/jlgre/
