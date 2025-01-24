// context/EventContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Create Context
const EventContext = createContext<any>(null);

export const EventProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  const emit = (msg: string) => {
    setMessage(msg); // This is equivalent to emitting an event with data
  };

  const on = () => message; // This is similar to listening for an event

  return (
    <EventContext.Provider value={{ emit, on }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use the Event Context
export const useEvent = () => useContext(EventContext);
