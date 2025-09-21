import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';

type Props = {};

export const Certifications = async (props: Props) => {
  const t = await getTranslations('certifications');
  const courses = t.raw('courses') as Array<{title: string, description: string}>;

  return (
    <div className="container max-w-5xl">
      <div className="relative border border-border rounded-lg py-16 px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <h2 className="text-5xl font-bold whitespace-pre-line">
            {t('title')}
          </h2>
          <Image
            src={"/meta-icon.svg"}
            width={200}
            height={60}
            alt="Meta logo"
          />
        </div>
        <p className="text-muted-foreground flex items-center gap-2">
          {t('issueDate', { date: '4 June, 2024' })}{" "}
          <Link
            className="text-blue-900 hover:text-blue-800 underline transition duration-300"
            href="https://coursera.org/verify/professional-cert/2D5TYDSEUGVN"
          >
            {t('verifyLink')}
          </Link>
        </p>
        <h3 className="mt-10 text-lg font-medium">{t('coursesTitle')}</h3>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
          {courses.map((course, index) => (
            <li key={index}>
              <h4 className="text-base font-medium">{course.title}</h4>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                {course.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};