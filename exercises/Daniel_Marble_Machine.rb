# Welcome to Sonic Pi v2.11.1

use_bpm 150

define :vibraBell do
  in_thread do
    a = 0.1
    use_synth :pretty_bell
    with_fx  :reverb, mix: 0.3 do
      #play_pattern_timed [,,,,,,],[,,,,,,], sustain: a
      play_pattern_timed [:e6, :b5,:a5,:g5,:a5,:b5,:g5], [1.5, 2, 0.5, 0.5, 1, 1, 0.5], sustain: a
      play_pattern_timed [:a5,:d6,:b5,:a5,:g5,:a5,:fs5],[0.5, 2, 2, 0.5, 0.5, 1, 1], sustain: a
      play_pattern_timed [:g5,:a5,:d6,:b5,:d6,:c6,:b5],[0.5,0.5,2,2,0.5,0.5,1], sustain: a
      play_pattern_timed [:a5,:g5,:a5,:e5],[1,0.5,0.5,1], sustain: a
      play_pattern_timed [:b4,:c5,:fs5,:c5,:e5,:g5,:d5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5], sustain: a
      play_pattern_timed [:fs5,:a5,:e5,:b5,:fs5,:g5,:a5,:e6],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,1], sustain: a
    end
  end
end

define :vibraBell2  do
  in_thread do
    a = 0.1
    use_synth :pretty_bell
    with_fx  :reverb, mix: 0.3 do
      sleep 1.5
      play_pattern_timed [:b5,:a5,:g5,:a5,:b5,:g5], [ 2, 0.5, 0.5, 1, 1, 0.5], sustain: a
      play_pattern_timed [:a5,:d6,:b5,:a5,:g5,:a5,:fs5],[0.5, 2, 2, 0.5, 0.5, 1, 1], sustain: a
      play_pattern_timed [:g5,:a5,:d6,:b5,:d6,:c6,:b5],[0.5,0.5,2,2,0.5,0.5,1], sustain: a
      play_pattern_timed [:a5,:g5,:a5,:e5],[1,0.5,0.5,1], sustain: a
      play_pattern_timed [:b4,:c5,:fs5,:c5,:e5,:g5,:d5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5], sustain: a
      play_pattern_timed [:fs5,:a5,:e5,:b5,:fs5,:g5,:a5,:e6],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,1], sustain: a
    end
  end
end

define :vibraBell3 do
  in_thread do
    a = 0.1
    use_synth :pretty_bell
    with_fx  :reverb, mix: 0.3 do
      #play_pattern_timed [,,,,,,],[,,,,,,], sustain: a
      play_pattern_timed [:e6,:b5,:a5,:g5,:a5,:b5,:g5], [1.5, 2, 0.5, 0.5, 1, 1, 0.5], sustain: a
      play_pattern_timed [:a5,:d6,:b5,:a5,:g5,:a5,:fs5],[0.5, 2, 2, 0.5, 0.5, 1, 1], sustain: a
      play_pattern_timed [:g5,:a5,:d6,:b5,:d6,:c6,:b5],[0.5,0.5,2,2,0.5,0.5,1], sustain: a
      play_pattern_timed [:a5,:g5,:a5,:e5],[1,0.5,0.5,1], sustain: a
      play_pattern_timed [:c5,:e5,:b5,:b4,:c5,:d5,:d6,:c6,:b5,:a5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5], sustain: a
      play_pattern_timed [:a5,:g5,:a5,:e6 ],[1,0.5,0.5,1], sustain: a
    end
  end
end


define :vibraBellShort do
  in_thread do
    a = 0.1
    use_synth :pretty_bell
    with_fx  :reverb, mix: 0.3 do
      sleep 1.5
      play_pattern_timed [:b5,:a5,:g5,:a5,:b5,:g5], [ 2, 0.5, 0.5, 1, 1, 0.5], sustain: a
      play_pattern_timed [:a5,:d6,:b5,:a5,:g5,:a5,:fs5],[0.5, 2, 2, 0.5, 0.5, 1, 1], sustain: a
      play_pattern_timed [:g5,:a5,:d6,:b5,:d6,:c6,:b5],[0.5,0.5,2,2,0.5,0.5,1], sustain: a
      play_pattern_timed [:a5,:g5,:fs5,:e5],[1,0.5,0.5,1], sustain: a
    end
  end
end

define :bassBell do
  in_thread do
    a = 0.1
    use_synth :pretty_bell
    with_fx  :reverb, mix: 0.3 do
      2.times do
        play_pattern_timed [:e4,:g4,:b4,:g4,:b4,],[1,0,2,0,1], sustain: a
      end
      2.times do
        play_pattern_timed [:g4,:b4,:d5,:b4,:d5],[1,0,2,0,1], sustain: a
      end
      2.times do
        play_pattern_timed [:fs4,:b4,:d5,:b4,:d5],[1,0,2,0,1], sustain: a
      end
      play_pattern_timed [:a3,:a4,:e4,:b3,:fs4,:d4],[2,0,1.5,2.5,0,1.5], sustain: a
    end
  end
end

define :bassBell2 do
  in_thread do
    a = 0.1
    use_synth :pretty_bell
    with_fx  :reverb, mix: 0.3 do
      2.times do
        play_pattern_timed [:c4,:g4,:b4,:g4,:b4],[1,0,2,0,1], sustain: a
      end
      2.times do
        play_pattern_timed [:d4,:fs4,:b4,:fs4,:b4],[1,0,2,0,1], sustain: a
      end
      2.times do
        play_pattern_timed [:e4,:g4,:b4,:g4,:b4],[1,0,2,0,1], sustain: a
      end
      play_pattern_timed [:a3,:a4,:c3,:e4,:g4,:c4],[0,2,0,0,0,2], sustain: a
      play_pattern_timed [:b3,:b4,:d3,:fs4,:a4],[0,2,0,0,2], sustain: a
    end
  end
end

define :bassBellShort do
  in_thread do
    use_synth :pretty_bell
    with_fx  :reverb, mix: 0.3 do
      a = 0.1
      2.times do
        play_pattern_timed [:e4,:g4,:b4,:g4,:b4,],[1,0,2,0,1], sustain: a
      end
      2.times do
        play_pattern_timed [:g4,:b4,:d5,:b4,:d5],[1,0,2,0,1], sustain: a
      end
      2.times do
        play_pattern_timed [:fs4,:b4,:d5,:b4,:d5],[1,0,2,0,1], sustain: a
      end
    end
  end
end



define :drum1 do
  s = :sn_dolf
  in_thread do
    12.times do
      sample s
      sleep 2
    end
  end
end

define :drum2 do
  s = :bd_haus
  in_thread do
    4.times do
      sample s
      sleep 1
      sample s
      sleep 1
      sample s
      sleep 2
      sample s
      sleep 2
      sample s
      sleep 2
    end
  end
end

define :drum3 do
  in_thread do
    s = :bd_fat
    a = 3
    4.times do
      sleep 1
      sample s, hpf_env_curve: a
      sleep 2
      sample s, hpf_env_curve: a
      sleep 1.5
      sample s, hpf_env_curve: a
      sleep 1
      sample s, hpf_env_curve: a
      sleep 1.5
      sample s, hpf_env_curve: a
      sleep 1
      sample s, hpf_env_curve: a
    end
  end
end

define :bassRun1 do
  in_thread do
    a = 0.1
    use_synth :fm
    play_pattern_timed [:e3,:e3,:e3,:e3,:e4,:e3],[1,1,0.5,0.5,0.5,1], sustain: a
    play_pattern_timed [:e3,:e3,:e3,:e4,:e3,:g2],[1,1,0.5,0.5,0.5,1], sustain: a
    play_pattern_timed [:g2,:g2,:g3,:g2,:g2,:g2],[1,1,0.5,1,1,1], sustain: a
    play_pattern_timed [:g3,:g2,:g3,:b2,:b2,:b2],[0.5,0.5,0.5,1,1,1], sustain: a
    play_pattern_timed [:b3,:b2,:b2,:b2,:b3,:b2],[0.5,1,1,1,0.5,0.5], sustain: a
    play_pattern_timed [:b3,:c3,:g3,:e4,:g4,:c5],[0.5,0.5,0.5,0.5,1,1.5], sustain: a
    play_pattern_timed [:d3,:a3,:fs4,:a4,:d5],[0.5,0.5,0.5,1,1.5], sustain: a
  end
end

define :bassRun2 do
  in_thread do
    a = 0.1
    use_synth :fm
    play_pattern_timed [:e3,:b3,:e3,:e4,:e3],[1,0.5,0.5,0.5,1], sustain: a
    play_pattern_timed [:e3,:e3,:b3,:e4,:b3,:e3,:b3,:e3],[1,0.5,0.5,0.5,0.5,0.5,0.5,0.5], sustain: a
    play_pattern_timed [:g2,:g3,:g2,:g2,:g3],[0.5,0.5,1,1,0.5], sustain: a
    play_pattern_timed [:g2,:g2,:g2,:g3,:g2,:g3],[1,1,1,0.5,0.5,0.5], sustain: a
    play_pattern_timed [:b2,:b2,:b2,:b3,:b2,:b2,:b2,:b3,:b2,:b3],[1,1,1,0.5,1,1,1,0.5,0.5,0.5], sustain: a
    play_pattern_timed [:a2,:e2,:c3,:e3,:a3,:c4],[0.5,0.5,0.5,0.5,0.5,1.5], sustain: a
    play_pattern_timed [:b2,:fs2,:d3,:fs3,:b3,:d4],[0.5,0.5,0.5,0.5,0.5,1.5], sustain: a
  end
end

define :bassRun3 do
  in_thread do
    a = 0.1
    b = 0.7
    use_synth :fm
    2.times do
      play_pattern_timed [:c3,:g3,:c4],[0,0,1], sustain: a, amp: b
    end
    play_pattern_timed [:c3,:g3,:c4],[0,0,0.5], sustain: a, amp: b
    3.times do
      play_pattern_timed [:c3,:g3,:c4],[0,0,1], sustain: a, amp: b
    end
    play_pattern_timed [:c3,:g3,:c4],[0,0,0.5], sustain: a, amp: b
    2.times do
      play_pattern_timed [:c3,:g3,:c4],[0,0,1], sustain: a, amp: b
    end
    2.times do
      play_pattern_timed [:d3,:a3,:d4],[0,0,1], sustain: a, amp: b
    end
    play_pattern_timed [:d3,:a3,:d4],[0,0,0.5], sustain: a, amp: b
    3.times do
      play_pattern_timed [:d3,:a3,:d4],[0,0,1], sustain: a, amp: b
    end
    play_pattern_timed [:d3,:a3,:d4],[0,0,0.5], sustain: a, amp: b
    2.times do
      play_pattern_timed [:d3,:a3,:d4],[0,0,1], sustain: a, amp: b
    end
    2.times do
      play_pattern_timed [:e3,:b3,:e4],[0,0,1], sustain: a, amp: b
    end
    play_pattern_timed [:e3,:b3,:e4],[0,0,0.5], sustain: a, amp: b
    4.times do
      play_pattern_timed [:e3,:b3,:e4],[0,0,1], sustain: a, amp: b
    end
    2.times do
      play_pattern_timed [:e3,:b3,:e4],[0,0,0.5], sustain: a, amp: b
    end
    play_pattern_timed [:a2,:a3,:a3,:e4,:a4,:b4,:c5,:e5],[0,0.5,0.5,0.5,0.5,0.5,0.5,1], sustain: a, amp: b
    play_pattern_timed [:b2,:b3,:b3,:d4,:fs4,:a4,:b4,:d5],[0,0.5,0.5,0.5,0.5,0.5,0.5,0.5], sustain: a, amp: b
  end
end

define :bassRun4 do
  in_thread do
    a = 0.1
    b = 0.7
    c = 1
    use_synth :fm
    2.times do
      play_pattern_timed [:c3,:g3,:c4],[0,0,1], sustain: a, amp: b
    end
    play_pattern_timed [:c3,:g3,:c4],[0,0,0.5], sustain: a, amp: b
    3.times do
      play_pattern_timed [:c3,:g3,:c4],[0,0,1], sustain: a, amp: b
    end
    play_pattern_timed [:c3,:g3,:c4],[0,0,0.5], sustain: a, amp: b
    2.times do
      play_pattern_timed [:c3,:g3,:c4],[0,0,1], sustain: a, amp: b
    end
    2.times do
      play_pattern_timed [:d3,:a3,:d4],[0,0,1], sustain: a, amp: b
    end
    play_pattern_timed [:d3,:a3,:d4],[0,0,0.5], sustain: a, amp: b
    play_pattern_timed [:d3,:a3,:d4],[0,0,1], sustain: a, amp: b
    
    play_pattern_timed [:d3,:d4,:c3,:c4,:b2,:b3,:a2,:a3,:b2,:b3],[0,1,0,1,0,1,0,0.5,0,1], sustain: a, amp: b
    play_pattern_timed [:e2,:e3,:e4,:e3],[1,1,0.5,1], sustain: a, amp: c
    
    play_pattern_timed [:e3,:e2,:e3,:e3,:e3,:g3,:g3],[0.5,0.5,1,1,0.5,0.5,0.5], sustain: a, amp: c
    
    play_pattern_timed [:e3,:e4,:e3,:e4,],[0,1,0,1,], sustain: a, amp: c
    
    play_pattern_timed [:e2,:e3,:g4,:b4,:e5],[0,0,0,0,1], sustain: 3, decay: 1, amp: 0.5
  end
end

#play_pattern_timed [,,,,,,],[,,,,,,], sustain: a
define :bassRun5 do
  in_thread do
    a = 0.1
    b = 0.3
    c = 0.7
    use_synth :fm
    #play_pattern_timed [:c3,:g3,:g3,:c3,:g3,:g3,],[1,2,1,1,2,1], sustain: a
    play_pattern_timed [:c3,:g3,:c4,:c3,:g3,:c4,:c3,:c3,:g3,:c4,],[1,1,0.5,1,0.5,0.5,1,1,0.5,1], sustain: a
    play_pattern_timed [:d3,:a3,:d4,:d3,:a3,:d4,:d3,:d3,:a3,:d4,],[1,1,0.5,1,0.5,0.5,1,1,0.5,1], sustain: a
    play_pattern_timed [:e3,:b3,:e4,:e3,:b3,:e4,:e3,:e3,:b4,:e4,],[1,1,0.5,1,0.5,0.5,1,1,0.5,1], sustain: a
    play_pattern_timed [:a3,:c3,:a4,:a3,:c3,:a4,:a3,:a3,:c4,:a4,],[1,1,0.5,1,0.5,0.5,1,1,0.5,1], sustain: a
  end
end

define:slow do
  in_thread do
    a = 3
    b = 5
    c = 0.7
    use_synth :piano
    with_fx  :reverb, mix: 0.5  do
      play_pattern_timed [:e5,:b5,:g6,:e6],[0,0,0,8], decay: a, sustain: b, amp: c
      
      play_pattern_timed [:g5,:b5,:g6,:d6],[0,0,0,8], decay: a, sustain: b, amp: c
      
      play_pattern_timed [:b5,:d6,:fs6,:b6,:a4,:c5,:e5,:a5,:c6],[0,0,0.25,7.5,0.25,0,0.25,0.25,5], decay: a, sustain: b, amp: c
      
      play_pattern_timed [:b5,:e5,:b5,:g6,:e6,:b5,],[2,0,0,0,2,6,], decay: a, sustain: b, amp: c
      play_pattern_timed [:b5,:fs6,:d6,:b5,:b5,:fs6,:d6,:b5],[0,0,2,5.75,0.25,0,2.25,6], decay: a, sustain: b, amp: c
      
      play_pattern_timed [:a3,:e4,:g4,:a5,:b5],[0,0,0,1,1], decay: a, sustain: b, amp: c
      play_pattern_timed [:b4,:c5,:e5,:b5,:e6], [1.5,0.5,1.5,0.5,1], decay: a, sustain: b, amp: c
      play :e1, decay: a, sustain: b-1, amp: 0.2
      sleep 1
    end
  end
end

define :slowBass do
  in_thread do
    a = 0.1
    b = 1.5
    c = 1
    s = :sn_dolf
    use_synth :fm
    use_bpm 50
    play :e2
    sleep 1
    use_bpm 100
    play_pattern_timed [:e3,:e4,:e2,:e3,:e4,:e2,:g2],[1,0.5,1,0.5,0.5,0.5,1], sustain: a, amp: b
    play_pattern_timed [:e3,:e2,:g2,:e3,:g3,:g3,:g2],[0.5,0.5,0.5,0.5,1,0.5,1], sustain: a, amp: b
    use_bpm 117
    play_pattern_timed [:g3,:g2,:g3,:g2],[0.5,1,1,1], sustain: a, amp: b
    use_bpm 85
    play_pattern_timed [:g2,:e3,:g2,:g3],[0.5,0.5,0.5,0.5], sustain: a, amp: b
    use_bpm 127
    play_pattern_timed [:b2,:b2],[1,0], sustain: a, amp: b
    sample s, amp: b
    sleep 1
    play_pattern_timed [:a2,:b2],[0.5,0.5], sustain: a, amp: b
    sample s, amp: b
    sleep 1
    use_bpm 135
    play_pattern_timed [:a2,:b2],[0.5,0.5], sustain: a, amp: b
    sample s, amp: b
    sleep 0.5
    play_pattern_timed [:b2,:b2,:b2],[1,1,0.5], sustain: a, amp: b
    sample s, amp: b
    use_bpm 142
    play_pattern_timed [:c3,:c4],[2,2], sustain: c, amp: b
    sample s, amp: b
    play :d3, sustain: 1
    sleep 2.5
    play :d3
    sleep 0.5
    sample s, amp: b
    play :e3
    sleep 1
    use_bpm 150
  end
end

define :buildupBass do
  in_thread do
    a = 0.1
    b = 2
    s = :drum_tom_lo_hard
    r = :drum_splash_soft
    use_synth :fm
    play_pattern_timed [:e2,:e2,:e3,:e2,:e2,],[1,1,0.5,1,1], sustain: a, amp: b
    play_pattern_timed [:e2,:e3,:e2,:a2,:b2,:d3],[0.5,0.5,1,0.5,0.5,0.5], sustain: a, amp: b
    play_pattern_timed [:g2,:g2,:g3,:g2,:g2],[1,1,0.5,1,1], sustain: a, amp: b
    play_pattern_timed [:g2,:g2,:g3,:g2,:g2,:g2,],[1,0.5,0.5,0.5,0.5,0.5], sustain: a, amp: b
    play_pattern_timed [:b2,:b2,:b3,:b2,:b2],[1,1,0.5,1,0.5], sustain: a, amp: b
    play_pattern_timed [:b3,:b2,:b2,:b2,:d3,:e3],[0.5,1,1,0.5,0.5,0.5], sustain: a, amp: b
    sample s, amp: b
    play_pattern_timed [:e3,:e2],[1,1], sustain: a, amp: b
    sample s, amp: b
    play :e4, sustain: 3
    play :e3, sustain: 3
    sleep 2
    sample s, amp: b
    sleep 1.5
    sample s, amp: b
    sleep 1.5
    sample s, amp: b
    sample r, amp: b
  end
end

live_loop :main do
  in_thread do
    vibraBell
    bassBell
  end
  sleep 32
  in_thread do
    vibraBell2
    bassBell
    drum1
  end
  sleep 32
  in_thread do
    vibraBell2
    bassBell
    drum1
    drum2
    drum3
    bassRun1
  end
  sleep 32
  in_thread do
    vibraBell2
    bassBell
    drum1
    drum2
    drum3
    bassRun2
  end
  sleep 32
  in_thread do
    vibraBell2
    bassBell
    drum1
    drum2
    drum3
    bassRun3
  end
  sleep 32
  in_thread do
    vibraBellShort
    bassBellShort
    drum1
    drum2
    drum3
    bassRun4
  end
  sleep 32
  in_thread do
    slow
  end
  sleep 76
  in_thread do
    slowBass
  end
  sleep 43
  in_thread do
    buildupBass
    drum1
    drum2
    drum3
  end
  sleep 32
  in_thread do
    vibraBell
    bassBell
    drum1
    drum2
    drum3
    bassRun3
  end
  sleep 32
  in_thread do
    vibraBellShort
    bassBellShort
    drum1
    drum2
    drum3
    bassRun4
  end
  sleep 32
end

