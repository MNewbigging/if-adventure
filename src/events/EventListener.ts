import { EventMap } from './EventMap';

export type EventCallback = (event: any) => void;

class EventListener {
  private readonly events = new Map<keyof EventMap, EventCallback[]>();

  on<E extends keyof EventMap>(type: E, listener: (event: EventMap[E]) => void) {
    // Store the listener
    const callbacks = this.events.get(type) ?? [];
    callbacks.push(listener);
    this.events.set(type, callbacks);
  }

  off<E extends keyof EventMap>(type: E, listener: (event: EventMap[E]) => void) {
    // Remove the listener
    const callbacks = this.events.get(type)?.filter((cb) => cb !== listener);
    this.events.set(type, callbacks);
  }

  fire<E extends keyof EventMap>(type: E, event: EventMap[E]) {
    this.events.get(type)?.forEach((cb) => cb(event));
  }
}

export const eventListener = new EventListener();
