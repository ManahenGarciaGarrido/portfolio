import type { Metadata } from "next";
import Link from "next/link";
import RevokeConsentButton from "@/components/analytics/RevokeConsentButton";

export const metadata: Metadata = {
  title: "Política de Privacidad | Manahen García Garrido",
  description:
    "Información sobre cómo tratamos tus datos personales y el uso de cookies en esta web.",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidad() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "#050010", color: "#fff" }}
    >
      {/* ── Navegación superior ── */}
      <div className="r-container py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>

      {/* ── Cabecera ── */}
      <header className="r-container pb-12 text-center">
        <span
          className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6"
          style={{
            background: "rgba(108, 0, 255, 0.15)",
            border: "1px solid rgba(108, 0, 255, 0.3)",
            color: "#a855f7",
          }}
        >
          Legal
        </span>

        <h1
          className="text-4xl sm:text-5xl font-black mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Política de{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6c00ff, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Privacidad
          </span>
        </h1>

        <p className="text-white/40 text-sm">
          Última actualización: febrero de 2026
        </p>
      </header>

      {/* ── Contenido ── */}
      <main className="r-container pb-20">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* 1. Responsable */}
          <Section title="1. Responsable del tratamiento">
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica
              3/2018 (LOPDGDD), te informamos de que el responsable del tratamiento de
              los datos personales recabados a través de este sitio web es:
            </p>
            <InfoBox>
              <InfoRow label="Nombre" value="Manahen García Garrido" />
              <InfoRow label="Actividad" value="Desarrollador web freelance" />
              <InfoRow label="Contacto" value="hola@manahen.dev" />
              <InfoRow label="WhatsApp" value="+34 640 038 508" />
            </InfoBox>
          </Section>

          <Divider />

          {/* 2. Datos que recopilamos */}
          <Section title="2. Datos que recopilamos">
            <p>
              Este sitio web puede recopilar, con tu consentimiento previo, los
              siguientes tipos de datos a través de herramientas de analítica de
              terceros:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mt-4">
              <li>Dirección IP anonimizada (no se almacena la IP completa)</li>
              <li>País y ciudad de origen (nivel de ciudad, no exacto)</li>
              <li>Tipo de dispositivo, sistema operativo y navegador</li>
              <li>Páginas visitadas, tiempo de permanencia y ruta de navegación</li>
              <li>Fuente de tráfico (buscador, enlace directo, redes sociales…)</li>
              <li>
                Grabaciones de sesión y mapas de calor — solo si aceptas las cookies
                (Microsoft Clarity)
              </li>
            </ul>
            <p className="mt-4">
              Este sitio web{" "}
              <strong className="text-white">no recoge datos de formularios</strong>{" "}
              (nombre, email, etc.) a través de analítica. Los formularios de contacto
              que puedas ver en las demos son ilustrativos y no envían datos.
            </p>
          </Section>

          <Divider />

          {/* 3. Base legal */}
          <Section title="3. Base legal del tratamiento">
            <p>
              La base legal para el tratamiento de tus datos mediante cookies de
              analítica es tu{" "}
              <strong className="text-white">
                consentimiento explícito (Art. 6.1.a RGPD)
              </strong>
              , otorgado a través del banner de cookies que aparece en tu primera visita.
            </p>
            <p className="mt-3">
              Vercel Analytics no utiliza cookies ni almacena datos personales
              identificables, por lo que no requiere consentimiento bajo el Art. 5.3 de
              la Directiva ePrivacy.
            </p>
          </Section>

          <Divider />

          {/* 4. Finalidad */}
          <Section title="4. Finalidad del tratamiento">
            <p>Los datos recopilados se usan exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mt-4">
              <li>Conocer cuántas personas visitan el sitio y desde dónde</li>
              <li>Analizar qué secciones o demos despiertan más interés</li>
              <li>Mejorar la experiencia de usuario y el rendimiento del sitio</li>
              <li>Detectar errores de navegación o de carga</li>
            </ul>
            <p className="mt-4">
              Los datos <strong className="text-white">no se usan</strong> para
              publicidad, perfilado comercial ni se venden a terceros bajo ningún
              concepto.
            </p>
          </Section>

          <Divider />

          {/* 5. Derechos */}
          <Section title="5. Tus derechos (RGPD)">
            <p>
              Puedes ejercer en cualquier momento los siguientes derechos contactando
              por email o WhatsApp:
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(108, 0, 255, 0.1)" }}>
                    <th className="text-left px-4 py-3 font-semibold text-white/80">
                      Derecho
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-white/80">
                      Qué implica
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Acceso", "Saber qué datos tenemos sobre ti."],
                    ["Rectificación", "Corregir datos inexactos."],
                    ["Supresión", "Solicitar el borrado de tus datos."],
                    [
                      "Portabilidad",
                      "Recibir tus datos en formato estructurado.",
                    ],
                    [
                      "Oposición",
                      "Oponerte al tratamiento en cualquier momento.",
                    ],
                    [
                      "Limitación",
                      "Solicitar que se restrinja el tratamiento.",
                    ],
                  ].map(([derecho, desc]) => (
                    <tr
                      key={derecho}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-white/90">
                        {derecho}
                      </td>
                      <td className="px-4 py-3 text-white/60">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-white/50 text-sm">
              También puedes presentar una reclamación ante la Agencia Española de
              Protección de Datos (AEPD) en{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white transition-colors"
              >
                aepd.es
              </a>
              .
            </p>
          </Section>

          <Divider />

          {/* 6. Cookies */}
          <Section title="6. Cookies y tecnologías de rastreo">
            <p>
              A continuación se detallan las herramientas utilizadas, el tipo de datos
              que recopilan y si requieren tu consentimiento:
            </p>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
              <table className="min-w-[640px] w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(108, 0, 255, 0.1)" }}>
                    {[
                      "Herramienta",
                      "Empresa",
                      "Tipo",
                      "Datos recogidos",
                      "Duración",
                      "Consentimiento",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-4 py-3 font-semibold text-white/80 whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <CookieRow
                    tool="Vercel Analytics"
                    company="Vercel Inc."
                    type="Sin cookie"
                    data="URL, referrer, país, dispositivo"
                    duration="Sesión"
                    consent={false}
                    link="https://vercel.com/legal/privacy-policy"
                  />
                  <CookieRow
                    tool="Google Analytics 4"
                    company="Google LLC"
                    type="Cookie 1ª/3ª parte"
                    data="IP anonimizada, navegador, SO, páginas, fuente de tráfico"
                    duration="13 meses"
                    consent={true}
                    link="https://policies.google.com/privacy"
                  />
                  <CookieRow
                    tool="Microsoft Clarity"
                    company="Microsoft Corp."
                    type="Cookie 3ª parte"
                    data="Grabaciones de sesión, mapas de calor, clics, scroll"
                    duration="1 año"
                    consent={true}
                    link="https://privacy.microsoft.com/es-es/privacystatement"
                  />
                </tbody>
              </table>
            </div>

            {/* Revocar consentimiento */}
            <div
              className="mt-6 p-5 rounded-2xl border border-white/10"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <p className="text-white/70 text-sm mb-4">
                <strong className="text-white">¿Quieres retirar tu consentimiento?</strong>{" "}
                Puedes hacerlo en cualquier momento. Esto eliminará las cookies
                analíticas de tu navegador y volverás a ver el banner de cookies en tu
                próxima visita.
              </p>
              <RevokeConsentButton />
            </div>
          </Section>

          <Divider />

          {/* 7. Transferencias internacionales */}
          <Section title="7. Transferencias internacionales de datos">
            <p>
              Google (Analytics 4) y Microsoft (Clarity) tienen su sede en Estados
              Unidos. La transferencia de datos se ampara en las{" "}
              <strong className="text-white">
                Cláusulas Contractuales Tipo (CCT)
              </strong>{" "}
              aprobadas por la Comisión Europea, y en el marco del{" "}
              <em>EU-US Data Privacy Framework</em> vigente.
            </p>
            <p className="mt-3">
              Vercel Inc. también procesa datos en infraestructura de la UE (región{" "}
              <code className="text-purple-400 bg-white/5 px-1 rounded">cdg1</code> —
              París, Francia), minimizando las transferencias transatlánticas.
            </p>
          </Section>

          <Divider />

          {/* 8. Retención */}
          <Section title="8. Retención de datos">
            <p>
              Los datos se conservan durante el tiempo indicado en la tabla de cookies
              anterior. En Google Analytics 4, la retención máxima configurada es de{" "}
              <strong className="text-white">14 meses</strong> (máximo disponible en el
              plan gratuito). Puedes solicitar la eliminación de tus datos en cualquier
              momento ejerciendo tu derecho de supresión.
            </p>
          </Section>

          <Divider />

          {/* 9. Contacto */}
          <Section title="9. Contacto">
            <p>
              Para cualquier consulta relacionada con esta política o para ejercer tus
              derechos, puedes contactar por:
            </p>
            <InfoBox>
              <InfoRow label="Email" value="hola@manahen.dev" />
              <InfoRow label="WhatsApp" value="+34 640 038 508" />
              <InfoRow label="Respuesta habitual" value="Menos de 24 horas" />
            </InfoBox>
          </Section>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        className="border-t border-white/10 py-10 px-6 text-center"
        style={{ background: "#040010" }}
      >
        <p className="text-white/70 font-semibold text-sm">
          Manahen García Garrido
        </p>
        <p className="text-white/30 text-xs mt-1">Desarrollador Web Freelance</p>
        <p className="text-white/20 text-xs mt-4">
          © {new Date().getFullYear()} Manahen García Garrido. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}

// ── Componentes auxiliares de la página ──────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        className="text-xl sm:text-2xl font-bold text-white mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      <div className="text-white/70 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Divider() {
  return <hr className="border-white/10" />;
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mt-4 rounded-2xl border border-white/10 divide-y divide-white/5"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      {children}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 px-5 py-3">
      <span className="text-white/40 text-sm w-28 shrink-0">{label}</span>
      <span className="text-white/90 text-sm font-medium">{value}</span>
    </div>
  );
}

function CookieRow({
  tool,
  company,
  type,
  data,
  duration,
  consent,
  link,
}: {
  tool: string;
  company: string;
  type: string;
  data: string;
  duration: string;
  consent: boolean;
  link: string;
}) {
  return (
    <tr className="hover:bg-white/5 transition-colors align-top">
      <td className="px-4 py-3 font-semibold text-white/90 whitespace-nowrap">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white transition-colors"
        >
          {tool}
        </a>
      </td>
      <td className="px-4 py-3 text-white/60 whitespace-nowrap">{company}</td>
      <td className="px-4 py-3 text-white/60 whitespace-nowrap">{type}</td>
      <td className="px-4 py-3 text-white/60">{data}</td>
      <td className="px-4 py-3 text-white/60 whitespace-nowrap">{duration}</td>
      <td className="px-4 py-3">
        {consent ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Sí
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
            No
          </span>
        )}
      </td>
    </tr>
  );
}
