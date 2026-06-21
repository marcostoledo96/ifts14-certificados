// Tipos conceptuales para alinear frontend y backend.
// Este archivo es orientativo y puede adaptarse al stack final.

export type EstadoValidacionPublica = 'valida' | 'revocada' | 'no_encontrada' | 'error_tecnico';
export type EstadoCertificacion = 'valida' | 'revocada';
export type EstadoEnvio = 'pendiente' | 'enviado' | 'error' | 'requiere_reenvio';

export interface AlumnoPublico {
  nombre: string;
  apellido: string;
  dni: string;
}

export interface CursoPublico {
  nombre: string;
  tipo: string;
}

export interface CertificacionPublica {
  numero: string;
  fechaEmision: string;
  codigoValidacionParcial: string;
}

export interface RespuestaValidacionPublica {
  estado: EstadoValidacionPublica;
  alumno?: AlumnoPublico;
  curso?: CursoPublico;
  certificacion?: CertificacionPublica;
  fechasPresentes?: string[];
  codigoConsultadoParcial?: string;
  consulta: {
    fechaHora: string;
  };
}
