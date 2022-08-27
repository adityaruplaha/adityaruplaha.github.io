---
layout: page
title: "BHOS IP Allocation"
permalink: /isi-internal/bhos-ip
back_to: "ISI Internal Pages"
back_to_url: /isi-internal
---

<script>
    function calc(side, floor, room) {
        if (floor < 0 || floor > 3) return 0;
        switch (side) {
            case 20: // North
                return side + floor * 16 + room;
            case 90: // East
                return side + floor * 10 + room;
            case 130: // West
                return side + floor * 10 + room;
            case 170: // South
                return side + floor * 16 + room;
            default:
                return 0;
        }
    }

    function update() {
        if (document.getElementById("room").value.length != 3 || document.getElementById("room").value == 0) {
            document.getElementById("ip").innerHTML = "<i>Invalid Room No.</i>";
            return;
        }

        var side = document.getElementById("side").value / 1;
        var floor = Math.floor(document.getElementById("room").value / 100);
        var room = document.getElementById("room").value % 100;

        var r = calc(side, floor, room)

        document.getElementById("ip").innerHTML = (r ? "192.168.22." + r : "<i>Invalid Room No.</i>");
    }
</script>

This is a calculation script for ISI's LAN allocation in C V Raman Hall, ISI Kolkata.
Made according to [this](http://www.isical.ac.in/~cssc/IP_Pattern_For_Boys_Hostel.pdf).

Please enter your room details:

<select id="side" onchange="update()">
  <option value="20" selected="selected">N</option>
  <option value="90">E</option>
  <option value="130">W</option>
  <option value="170">S</option>
</select>
-
<input type="number" length="3" id="room"  oninput="update()"/>

| Connection Type:  | Static IP                                     |
| IP Address:       | <span id="ip"><i>Invalid Room No.</i></span>  |
| Subnet:           | 255.255.255.0                                 |
| Gateway:          | 192.168.22.1                                  |
| DNS Servers:      | 192.168.143.25, 192.168.143.26                |
