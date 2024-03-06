module.exports = {
    params: {
      designator: 'MCU',
      orientation: 'down',
      RAW: { type: 'net', value: 'RAW' },
      GND1: { type: 'net', value: 'GND' },
      RST: { type: 'net', value: 'RST' },
      VCC: { type: 'net', value: 'VCC' },
      P21: { type: 'net', value: 'P21' },
      P20: { type: 'net', value: 'P20' },
      P19: { type: 'net', value: 'P19' },
      COL0: { type: 'net', value: 'COL0' },
      COL1: { type: 'net', value: 'COL1' },
      COL2: { type: 'net', value: 'COL2' },
      COL3: { type: 'net', value: 'COL3' },
      COL4: { type: 'net', value: 'COL4' },
      CS: { type: 'net', value: 'CS' },
      P0: { type: 'net', value: 'P0' },
      GND2: { type: 'net', value: 'GND' },
      GND3: { type: 'net', value: 'GND' },
      MOSI: { type: 'net', value: 'MOSI' },
      SCK: { type: 'net', value: 'SCK' },
      P4: { type: 'net', value: 'P4' },
      P5: { type: 'net', value: 'P5' },
      ROW0: { type: 'net', value: 'ROW0' },
      ROW1: { type: 'net', value: 'ROW1' },
      ROW2: { type: 'net', value: 'ROW2' },
      ROW3: { type: 'net', value: 'ROW3' }
    },
    body: p => {
      const standard = `
      (footprint "nice_nano_AH_Reversible" (version 20221018) (generator pcbnew)
  (layer "F.Cu")
  (descr "Footprint for nice!nano (nRF52850 pro-micro compatible controller), Reversible")
  (attr through_hole exclude_from_pos_files exclude_from_bom)
  (fp_text reference "REF**" (at -9.14 16.24) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    (tstamp d728db00-75dd-408e-87d3-729b754cedd4)
  )
  (fp_text value "nice_nano_AH_Reversible" (at 0 0.635 unlocked) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
    (tstamp 65ca7dc6-5223-41cd-9bd6-2fa2f4f9d1aa)
  )
  (fp_text user "1" (at -5.715 -13.2825) (layer "B.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify bottom mirror))
    (tstamp 0ea16137-22bb-452c-971d-9729625eff4a)
  )
  (fp_text user "tow. PCB" (at 0 -14.8 unlocked) (layer "B.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify bottom mirror))
    (tstamp 8091687d-2cff-4670-9e1c-4588d1910915)
  )
  (fp_text user "USB" (at 0 -16.2 unlocked) (layer "B.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify bottom mirror))
    (tstamp 856f77cc-63d5-423a-9df7-1d4f1d5a0706)
  )
  (fp_text user "1" (at -5.715 -13.2825) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify bottom))
    (tstamp 0cfef64e-6177-4e8c-a376-7cdbefde3587)
  )
  (fp_text user "topside" (at 0 -14.8 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify bottom))
    (tstamp 9c0982cf-38f0-46d7-b953-f3a7528d5a79)
  )
  (fp_text user "USB" (at 0 -16.2 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify bottom))
    (tstamp f8b8df8e-7450-4de7-ad56-9b7451a7de74)
  )
  (fp_text user "USB" (at 0 -16.2) (layer "Cmts.User")
      (effects (font (size 1 1) (thickness 0.15)) (justify bottom))
    (tstamp 777eed5f-6789-473b-a190-046f91dfa3ed)
  )
  (fp_line (start -3.55 -14.2) (end -3.55 -17.78)
    (stroke (width 0.15) (type default)) (layer "B.SilkS") (tstamp 212833a2-165b-4f4a-a212-c55392791644))
  (fp_line (start -3.55 -14.2) (end 3.55 -14.2)
    (stroke (width 0.15) (type default)) (layer "B.SilkS") (tstamp 99462f93-ae6c-4e7e-b9e4-6c07fe9e809c))
  (fp_line (start 3.55 -14.2) (end 3.55 -17.78)
    (stroke (width 0.15) (type default)) (layer "B.SilkS") (tstamp ea0b7c39-fa98-4f7f-9a93-ac1554d05a3f))
  (fp_rect (start 8.89 -17.78) (end -8.89 15.24)
    (stroke (width 0.15) (type solid)) (fill none) (layer "B.SilkS") (tstamp 307c3d6c-95f3-4794-984a-cdb32ffa183d))
  (fp_line (start -3.55 -14.2) (end -3.55 -17.78)
    (stroke (width 0.15) (type default)) (layer "F.SilkS") (tstamp e1040c94-f891-4e85-a32f-6b07267b5182))
  (fp_line (start 3.55 -14.2) (end -3.55 -14.2)
    (stroke (width 0.15) (type default)) (layer "F.SilkS") (tstamp 760c811a-67bf-40cd-a079-4343bbacce23))
  (fp_line (start 3.55 -14.2) (end 3.55 -17.78)
    (stroke (width 0.15) (type default)) (layer "F.SilkS") (tstamp 155d2694-ac08-4d70-9305-51d5d388958d))
  (fp_rect (start -8.89 -17.78) (end 8.89 15.24)
    (stroke (width 0.15) (type solid)) (fill none) (layer "F.SilkS") (tstamp a364979a-0963-4c59-abd3-518634dd4645))
  (fp_rect (start -3.55 -19.3) (end 3.55 -14.2)
    (stroke (width 0.1) (type default)) (fill none) (layer "Cmts.User") (tstamp 8952ebae-888f-4066-b425-18e6063bc400))
  (fp_rect (start 8.89 -17.78) (end -8.89 15.24)
    (stroke (width 0.2) (type solid)) (fill none) (layer "Cmts.User") (tstamp 0280ac38-c4e5-49dd-a7e2-b9acab509b73))
  (pad "1" thru_hole circle (at -7.62 -13.97) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp b6fdbd8c-965d-472a-9327-ede69a0cc253))
  (pad "2" thru_hole circle (at -7.62 -11.43) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp a9c65ba3-11b0-4f7e-92d4-a467220f8f6b))
  (pad "3" thru_hole roundrect (at -7.62 -8.89) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25) (tstamp 56c75057-bd8c-4f64-9724-ca3b7d5998be))
  (pad "4" thru_hole roundrect (at -7.62 -6.35) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25) (tstamp 2b3b9634-d3ba-46ac-a241-73a02d11ce3c))
  (pad "5" thru_hole circle (at -7.62 -3.81) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 80c1d20d-c383-4dbd-bc1b-a11a79282cdc))
  (pad "6" thru_hole circle (at -7.62 -1.27) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp f9391e57-40ca-4c33-a553-599af2b4355b))
  (pad "7" thru_hole circle (at -7.62 1.27) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp eddbae31-b2db-4339-9358-46f605c09f0d))
  (pad "8" thru_hole circle (at -7.62 3.81) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 3887a7ac-af1e-4f9a-92af-b88a9993af27))
  (pad "9" thru_hole circle (at -7.62 6.35) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 84cd68dc-4c92-4a99-b977-5e9a8e072ce3))
  (pad "10" thru_hole circle (at -7.62 8.89) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp e2ab611a-9578-40b0-8744-0a49582e5da3))
  (pad "11" thru_hole circle (at -7.62 11.43) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 9c9bccc9-2b55-4f2f-b7d9-3ddf9dea8825))
  (pad "12" thru_hole circle (at -7.62 13.97) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 7aed3582-8cb4-40c7-81cf-c78dc11779f2))
  (pad "13" thru_hole oval (at 7.62 -13.97) (size 1.8 4.34) (drill 1 (offset 0 -1.27)) (layers "*.Cu" "*.Mask") (tstamp bbc5287c-cec8-414c-883c-f3fa8b5164a8))
  (pad "14" thru_hole roundrect (at 7.62 -11.43) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25) (tstamp 42e92e89-bdfb-4786-a3b0-711e70101d0c))
  (pad "15" thru_hole circle (at 7.62 -8.89) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp d5967fd7-80fb-49da-bb1f-8a39f561f3a9))
  (pad "16" thru_hole circle (at 7.62 -6.35) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp dbc8a8ef-fc8b-4594-9701-1df4b7d7c590))
  (pad "17" thru_hole circle (at 7.62 -3.81) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 4f748430-ad2c-4c4b-ae82-4a8e5c57745e))
  (pad "18" thru_hole circle (at 7.62 -1.27) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp cc1e16f2-22c5-453f-940f-313d7f8c616f))
  (pad "19" thru_hole circle (at 7.62 1.27) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 3327230e-1f65-48ab-b4d8-5e6b4cbfa438))
  (pad "20" thru_hole circle (at 7.62 3.81) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 31f1aaac-ef17-4542-a0f5-ed91c5df87f4))
  (pad "21" thru_hole circle (at 7.62 6.35) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 674371e3-d92d-4b42-aa41-8b0466b481ee))
  (pad "22" thru_hole circle (at 7.62 8.89) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp e8ea5174-084a-430f-8d63-65e7fb931378))
  (pad "23" thru_hole circle (at 7.62 11.43) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 7c9b3607-dfc6-4fd4-884b-a08dbc00dcfd))
  (pad "24" thru_hole circle (at 7.62 13.97) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 59131930-ca40-4936-a1c9-e22f1727f612))
  (pad "25" thru_hole circle (at -5.08 8.89) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 96c4ea99-3bf0-4a1b-b1ea-04d34f30b934))
  (pad "26" thru_hole circle (at -2.54 8.89) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp f248cb78-2442-402c-bdd5-ee553f0fbeb1))
  (pad "27" thru_hole circle (at 0 8.89) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp eab96a20-b0d2-432e-b89a-fbc68dbbbe24))
  (pad "28" thru_hole roundrect (at -7.62 -16.51) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25) (tstamp cf0ea8e6-098a-4755-8ae0-a8ebd0f00ebf))
  (pad "29" thru_hole circle (at 7.62 -16.51) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 69f03f31-5151-4e54-8f28-459af9200323))
  (zone (net 0) (net_name "") (layers "*.Cu") (tstamp 7673dab6-87a8-46d5-817f-30e7378d150b) (name "ANT") (hatch edge 0.5)
    (connect_pads (clearance 0))
    (min_thickness 0.25) (filled_areas_thickness no)
    (keepout (tracks allowed) (vias allowed) (pads allowed) (copperpour not_allowed) (footprints allowed))
    (fill (thermal_gap 0.5) (thermal_bridge_width 0.5))
    (polygon
      (pts
        (xy -13.89 10.16)
        (xy 13.89 10.16)
        (xy 13.89 20.24)
        (xy -13.89 20.24)
      )
    )
  )
)
`
}
}
