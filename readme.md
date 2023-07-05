# Product Configurator for a Custom LED Mirror Website

This project involves creating a jQuery powered product configurator for a custom LED mirror website. The product configurator has the following options:

- Frame Color
  - Black Metal
  - Gold Metal
  - Silver Metal
- Frame Thickness
  - Thin Frame
  - Wide Frame
- Style
  - Full Frame Inset
  - Full Frame Edge
  - Double Long Side Inset
  - Double Long Side Edge
  - No Frost
  - Double Short Side Edge
  - Double Short Side Inset
  - Single Long Side Edge
  - Single Short Side Edge
  - Single Short Side Inset
  - Round Full Frame Edge
  - Round No Frost
- Orientation
  - Vertical Mounting
  - Horizontal Mounting
- Light Direction
  - Direct
  - Indirect
  - Both Direct And Indirect
- Size In Inches
  - Standard sizes dropdown
  - 18"x36"
  - 24"x36"
  - 30"x36"
  - Custom Sizes
    - Width
    - Height
- Quantity
- Color Temperature
  - Warm Light (2700k)
  - Warm Light (3000k)
  - Mid-Warm Light (3500k)
  - Cool Light (5000k)
  - Adjustable (2700K-6500k)
- Controls
  - Touch Sensors
  - Matrix Touch System
  - Handheld Controller
- Accessories
  - None
  - Night Light
  - Anti-Fog
- Lighting Output
  - Standard
  - High
- Dimming
  - Non-Dimming
  - ELV Dimmable
  - 0-10 Dimmable

These options are all on the right side of the screen and on the left is the product image. When options are selected, the product image updates in real time to show the selected configuration. The options that change the image are Style, Orientation, and a combination of Light Direction and Accessories selected.

Under the product image is text summary of options selected and change as options are selected. It also generates a SKU code based on every option selected.

Once the form has been filled out, the customer can click a "Download PDF" and the image and all selected options are generated into a PDF with product details called SPEC Sheet.

There is also some conditional logic involved in the configurator. For example, Inset Styles can't have an indirect light direction, Edge Styles can't have Both Direct And Indirect option for light direction, Single Short Side Styles can only have Vertical Orientation, and so on.

There are also touch sensor overlay images. There are 3 available touch sensor slots. There can only be 3 touch sensors in a configuration, but there can be less than 3 or none. This configurator should overlay the correct touch sensor images on the product image based on this logic.
