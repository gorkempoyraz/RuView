// /ws/sensing emits `sensing_update` frames (nodes/features/classification/signal_field),
// which is exactly the SensingFrame shape the app consumes. /api/v1/stream/pose emits a
// different `pose_data` envelope and left every screen empty.
export const WS_PATH = '/ws/sensing';
export const RECONNECT_DELAYS = [1000, 2000, 4000, 8000, 16000];
export const MAX_RECONNECT_ATTEMPTS = 10;
