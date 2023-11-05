<div class="header-info header-info-right">
    <ul>
        <li>
            <a class="language-dropdown-active d-flex align-items-center gap-1" href="#">
                <i class="fa fa-globe-americas"></i>
                {{ App\Helpers\LanguageHelper::getLanguageName(app()->currentLocale()) }}
                <i class="fa fa-chevron-down"></i>
            </a>
            <ul class="language-dropdown">
                @foreach (config('app.supported_locales') as $locale)
                    <li>
                        <a href="{{ route('lang.switch', $locale['code']) }}">
                            <span class="fi fi-{{ $locale['code'] == 'en' ? 'us' : $locale['code'] }}"></span>
                            <span class="ms-1">{{ $locale['name'] }}</span>
                        </a>
                    </li>
                @endforeach
            </ul>
        </li>
        @auth
            <li>
                <a href="/">{{ auth()->user()->name }}</a>
                <span class="mx-1">/</span>
                <form action="{{ route('logout') }}" method="post">
                    {{ csrf_field() }}
                    <button class="nav-logout" type="submit">
                        {{ __('nav.logout') }} <i class="fas fa-sign-out-alt"></i>
                    </button>
                </form>
            </li>
        @else
            <li>
                <a href="{{ route('login') }}">{{ __('nav.login') }}</a>
                <span class="mx-1">/</span>
                <a href="{{ route('register') }}">{{ __('nav.signup') }}</a>
            </li>
        @endauth
    </ul>
</div>
