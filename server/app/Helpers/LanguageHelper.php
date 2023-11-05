<?php

namespace App\Helpers;

class LanguageHelper
{
    public static function getLanguageName($locale)
    {
        $supportedLocales = config('app.supported_locales');

        foreach ($supportedLocales as $supportedLocale) {
            if ($supportedLocale['code'] === $locale) {
                return $supportedLocale['name'];
            }
        }

        return config('app.fallback_locale');
    }
}
