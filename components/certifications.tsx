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
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-start">
        {/* Left Side - Text */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            {t('sectionTitle')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            {t('sectionDescription')}
          </p>
          <Link
            className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-800 underline transition duration-300"
            href="https://coursera.org/verify/professional-cert/2D5TYDSEUGVN"
          >
            {t('verifyLink')}
          </Link>
        </div>

        {/* Right Side - Certificate Card */}
        <div className="relative border border-border rounded-lg py-12 px-8 lg:py-16 lg:px-10 lg:mt-20 bg-neutral-100 dark:bg-neutral-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold whitespace-pre-line text-neutral-900">
              {t('title')}
            </h3>
            <Image
              src={"/meta-icon.svg"}
              width={200}
              height={60}
              alt="Meta logo"
              className="mt-4 md:mt-0"
            />
          </div>
          <p className="text-neutral-600 mt-4">
            {t('issueDate', { date: '4 June, 2024' })}
          </p>
          <h4 className="mt-10 text-lg font-medium text-neutral-900">{t('coursesTitle')}</h4>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            {courses.map((course, index) => (
              <li key={index}>
                <h5 className="text-base font-medium text-neutral-900">{course.title}</h5>
                <p className="mt-2 text-sm font-light text-neutral-600">
                  {course.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};