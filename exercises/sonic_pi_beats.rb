# Welcome to Sonic Pi v2.11.1

use_bpm 130

live_loop :kick do
  7.times do
    sample :bd_klub
    sleep 1
  end
  2.times do
    sample :bd_klub
    sleep 0.5
  end
end

live_loop :snare do
  3.times do
    sleep 1
    sample :drum_snare_hard
    sleep 1
  end
  sleep 1
  sample :drum_snare_hard
  sleep 0.75
  sample :drum_snare_hard
  sleep 0.25
end

live_loop :hats do
  2.times do
    sample :drum_cymbal_closed
    sleep 0.5
    sample :drum_cymbal_open, sustain: 0, release: 0.5
    sleep 0.5
    sample :drum_cymbal_closed
    sleep 0.25
    sample :drum_cymbal_closed
    sleep 0.25
    sample :drum_cymbal_open, sustain: 0, release: 0.5
    sleep 0.5
  end
end

live_loop :bass do
  use_synth :tb303
  4.times do
    sleep 0.5
    play 40, cutoff: 50, amp: 0.8
    sleep 0.5
  end
end
