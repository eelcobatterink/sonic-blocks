use_bpm 120

define :phrase1 do
  play 60
  sleep 1
  play 62
  sleep 1
  play 64
  sleep 1
  play 60
  sleep 1
end

define :phrase2 do
  play 64
  sleep 1
  play 65
  sleep 1
  play 67
  sleep 2
end

define :phrase3 do
  play 67
  sleep 0.5
  play 69
  sleep 0.5
  play 67
  sleep 0.5
  play 65
  sleep 0.5
  play 64
  sleep 1
  play 60
  sleep 1
end

define :phrase4 do
  play 60
  sleep 1
  play 55
  sleep 1
  play 60
  sleep 2
  
end


define :song do
  2.times do
    phrase1()
  end
  
  2.times do
    phrase2()
  end
  
  2.times do
    phrase3()
  end
  
  2.times do
    phrase4()
  end
end



in_thread do
  song()
end

in_thread do
  sleep 4
  song()
end

in_thread do
  sleep 8
  song()
end

