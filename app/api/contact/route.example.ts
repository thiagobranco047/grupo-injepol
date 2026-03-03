// Exemplo de API Route para envio de formulário de contato
// INSTRUÇÕES: 
// 1. Descomente este arquivo e salve como: app/api/contact/route.ts
// 2. Configure as variáveis de ambiente no arquivo .env.local
// 3. Instale o pacote de e-mail: npm install resend (ou nodemailer, sendgrid, etc)

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      );
    }

    // OPÇÃO 1: Enviar com Resend
    // -----------------------------------------
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'contato@grupoinjepol.com.br',
    //   to: 'contato@grupoinjepol.com.br',
    //   subject: `[Site] ${subject}`,
    //   html: `
    //     <h2>Nova mensagem do site</h2>
    //     <p><strong>Nome:</strong> ${name}</p>
    //     <p><strong>E-mail:</strong> ${email}</p>
    //     <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
    //     <p><strong>Assunto:</strong> ${subject}</p>
    //     <p><strong>Mensagem:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // OPÇÃO 2: Enviar com Nodemailer
    // -----------------------------------------
    // import nodemailer from 'nodemailer';
    //
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT || '587'),
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: 'contato@grupoinjepol.com.br',
    //   subject: `[Site] ${subject}`,
    //   html: `
    //     <h2>Nova mensagem do site</h2>
    //     <p><strong>Nome:</strong> ${name}</p>
    //     <p><strong>E-mail:</strong> ${email}</p>
    //     <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
    //     <p><strong>Assunto:</strong> ${subject}</p>
    //     <p><strong>Mensagem:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // OPÇÃO 3: Salvar em banco de dados
    // -----------------------------------------
    // import { PrismaClient } from '@prisma/client';
    // const prisma = new PrismaClient();
    //
    // await prisma.contactMessage.create({
    //   data: {
    //     name,
    //     email,
    //     company,
    //     subject,
    //     message,
    //   },
    // });

    // OPÇÃO 4: Enviar para webhook externo (Zapier, Make, etc)
    // -----------------------------------------
    // await fetch(process.env.WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, company, subject, message }),
    // });

    console.log('Mensagem recebida:', { name, email, subject });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao processar contato:', error);
    return NextResponse.json(
      { error: 'Erro ao processar mensagem' },
      { status: 500 }
    );
  }
}
