{{ $family := .Get 0 }}
{{ $chips := index $.Site.Data.chips $family }}
{{ $features := (dict "gpios" "GPIOs" "package" "Package") }}

| - |{{ delimit (apply $chips "index" "." "id") " | " }} |
|---------|{{ range $chips }}---|{{ end }}
{{- range $feature, $string := $features }}
| {{ $string }} | {{ delimit (apply $chips "index" "." $feature) " | " }} |
{{- end }}
